"use strict";

const DATA_URL = "./data/data.json";
const ALLOWED_STATES = new Set(["loading", "success", "empty", "error"]);

const elements = {
  heroEyebrow: document.querySelector("#hero-eyebrow"),
  heroTitle: document.querySelector("#hero-title"),
  heroText: document.querySelector("#hero-text"),
  heroAction: document.querySelector("#hero-action"),
  authorInitials: document.querySelector("#author-initials"),
  authorName: document.querySelector("#author-name"),
  authorRole: document.querySelector("#author-role"),
  authorOrganization: document.querySelector("#author-organization"),
  authorMission: document.querySelector("#author-mission"),
  authorObjective: document.querySelector("#author-objective"),
  authorUses: document.querySelector("#author-uses"),
  authorDevelopmentNeed: document.querySelector("#author-development-need"),
  projectAxes: document.querySelector("#project-axes-grid"),
  pillars: document.querySelector("#pillars-grid"),
  resources: document.querySelector("#resources-grid"),
  status: document.querySelector("#resource-status"),
  method: document.querySelector("#method-list"),
  validationList: document.querySelector("#validation-list"),
  validationQuote: document.querySelector("#validation-quote"),
  validationOwner: document.querySelector("#validation-owner"),
  faq: document.querySelector("#faq-list"),
  menuButton: document.querySelector(".menu-button"),
  navigation: document.querySelector("#main-nav"),
  stateButtons: [...document.querySelectorAll("[data-state]")]
};

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (typeof text === "string") element.textContent = text;
  return element;
}

function replaceChildren(target, children) {
  if (!target) return;
  target.replaceChildren(...children);
}

function updateStatus(state, title, message) {
  const classes = ["status", `status-${state}`];
  elements.status.className = classes.join(" ");
  elements.status.dataset.state = state;

  const icon = makeElement("span", "status-icon");
  icon.setAttribute("aria-hidden", "true");

  const copy = makeElement("span", "status-copy");
  copy.append(makeElement("strong", "", title), makeElement("span", "", message));
  elements.status.replaceChildren(icon, copy);

  elements.resources.setAttribute("aria-busy", state === "loading" ? "true" : "false");
}

function validateData(data) {
  if (!data || typeof data !== "object") throw new Error("Le JSON ne contient pas un objet valide.");

  const requiredArrays = ["projectAxes", "pillars", "resources", "method", "faq"];
  for (const key of requiredArrays) {
    if (!Array.isArray(data[key])) throw new Error(`Le champ ${key} doit être un tableau.`);
  }

  if (!data.author || typeof data.author !== "object") {
    throw new Error("Le champ author doit être un objet.");
  }

  const resourceIds = new Set();
  for (const resource of data.resources) {
    const required = ["id", "title", "category", "description", "image", "alt", "validation"];
    for (const field of required) {
      if (typeof resource[field] !== "string" || !resource[field].trim()) {
        throw new Error(`La ressource ${resource.id || "sans identifiant"} ne contient pas le champ ${field}.`);
      }
    }
    if (resourceIds.has(resource.id)) throw new Error(`Identifiant de ressource dupliqué : ${resource.id}.`);
    resourceIds.add(resource.id);
  }

  return data;
}

function renderHero(hero = {}) {
  if (hero.eyebrow) elements.heroEyebrow.textContent = hero.eyebrow;
  if (hero.title) elements.heroTitle.textContent = hero.title;
  if (hero.text) elements.heroText.textContent = hero.text;
  if (hero.actionLabel) elements.heroAction.textContent = hero.actionLabel;
  if (hero.actionTarget?.startsWith("#")) elements.heroAction.href = hero.actionTarget;
}

function renderPillars(pillars) {
  const cards = pillars.map((pillar) => {
    const article = makeElement("article", "pillar-card");
    article.dataset.number = pillar.number || "";
    article.append(
      makeElement("span", "pillar-number", pillar.number || "–"),
      makeElement("h3", "", pillar.title || "Principe"),
      makeElement("p", "", pillar.text || "Contenu à compléter.")
    );
    return article;
  });
  replaceChildren(elements.pillars, cards);
}

function renderAuthor(author = {}) {
  if (author.initials) elements.authorInitials.textContent = author.initials;
  if (author.fullName) elements.authorName.textContent = author.fullName;
  if (author.role) elements.authorRole.textContent = author.role;
  if (author.organization) elements.authorOrganization.textContent = author.organization;
  if (author.mission) elements.authorMission.textContent = author.mission;
  if (author.objective) elements.authorObjective.textContent = author.objective;
  if (author.developmentNeed) elements.authorDevelopmentNeed.textContent = author.developmentNeed;

  const uses = Array.isArray(author.currentUses) ? author.currentUses : [];
  replaceChildren(elements.authorUses, uses.map((use) => makeElement("li", "", use)));
}

function renderProjectAxes(projectAxes) {
  const cards = projectAxes.map((axis) => {
    const article = makeElement("article", "project-axis-card");
    article.dataset.number = axis.number || "";
    article.append(
      makeElement("span", "project-axis-number", axis.number || "–"),
      makeElement("h3", "", axis.title || "Axe de production"),
      makeElement("p", "", axis.text || "Contenu à compléter.")
    );
    return article;
  });
  replaceChildren(elements.projectAxes, cards);
}

function createResourceCard(resource) {
  const article = makeElement("article", "resource-card");
  article.id = `ressource-${resource.id}`;

  const visual = makeElement("div", "resource-image");
  const image = document.createElement("img");
  image.src = resource.image;
  image.alt = resource.alt;
  image.width = 360;
  image.height = 220;
  image.decoding = "async";
  visual.append(image);

  const body = makeElement("div", "resource-body");
  body.append(
    makeElement("p", "resource-category", resource.category),
    makeElement("h3", "", resource.title),
    makeElement("p", "", resource.description)
  );

  if (resource.keyPoint) body.append(makeElement("p", "key-point", resource.keyPoint));
  body.append(makeElement("span", "validation-tag", resource.validation));

  article.append(visual, body);
  return article;
}

function renderResources(resources) {
  if (resources.length === 0) {
    const empty = makeElement("div", "empty-panel");
    empty.append(
      makeElement("strong", "", "Aucune ressource disponible"),
      makeElement("span", "", "Le JSON est valide mais le tableau resources est vide.")
    );
    replaceChildren(elements.resources, [empty]);
    updateStatus("empty", "Vide", "Le chargement a réussi mais aucune ressource n’a été trouvée.");
    return;
  }

  replaceChildren(elements.resources, resources.map(createResourceCard));
  updateStatus("success", "Succès", `${resources.length} ressource${resources.length > 1 ? "s" : ""} chargée${resources.length > 1 ? "s" : ""} depuis le JSON local.`);
}

function renderMethod(method) {
  const items = method.map((item) => {
    const li = makeElement("li", "method-card");
    li.dataset.step = String(item.step || "");
    li.append(
      makeElement("span", "", String(item.step || "–")),
      makeElement("h3", "", item.title || "Étape"),
      makeElement("p", "", item.text || "Contenu à compléter.")
    );
    return li;
  });
  replaceChildren(elements.method, items);
}

function renderValidation(validation = {}) {
  const rules = Array.isArray(validation.rules) ? validation.rules : [];
  replaceChildren(elements.validationList, rules.map((rule) => makeElement("li", "", rule)));
  if (validation.quote) elements.validationQuote.textContent = validation.quote;
  if (validation.owner) elements.validationOwner.textContent = validation.owner;
}

function renderFaq(faq) {
  const items = faq.map((item) => {
    const details = makeElement("details", "faq-item");
    details.id = `faq-${item.id || "item"}`;
    const summary = makeElement("summary", "", item.question || "Question");
    const answer = makeElement("div", "faq-answer");
    answer.append(makeElement("p", "", item.answer || "Réponse à compléter."));
    details.append(summary, answer);
    return details;
  });
  replaceChildren(elements.faq, items);
}

function renderSharedContent(data) {
  renderHero(data.hero);
  renderAuthor(data.author);
  renderProjectAxes(data.projectAxes);
  renderPillars(data.pillars);
  renderMethod(data.method);
  renderValidation(data.validation);
  renderFaq(data.faq);
}

function showError(error) {
  replaceChildren(elements.resources, []);
  const localHint = window.location.protocol === "file:"
    ? " Ouvrez le projet avec http://localhost au lieu de file:///."
    : " Vérifiez le serveur local et le chemin data/data.json.";
  updateStatus("error", "Erreur", `${error.message}${localHint}`);
}

function markActiveState(state) {
  for (const button of elements.stateButtons) {
    button.setAttribute("aria-pressed", button.dataset.state === state ? "true" : "false");
  }
}

async function loadContent(requestedState = "success") {
  const state = ALLOWED_STATES.has(requestedState) ? requestedState : "success";
  markActiveState(state);
  replaceChildren(elements.resources, []);
  updateStatus("loading", "Chargement", "Lecture du fichier JSON local…");

  if (state === "loading") return;

  try {
    await wait(420);
    if (state === "error") throw new Error("Erreur volontaire pour vérifier l’interface.");

    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Le serveur répond avec le statut HTTP ${response.status}.`);

    const data = validateData(await response.json());
    renderSharedContent(data);
    renderResources(state === "empty" ? [] : data.resources);
  } catch (error) {
    const safeError = error instanceof Error ? error : new Error("Erreur de chargement inconnue.");
    showError(safeError);
  }
}

function setupStateControls() {
  for (const button of elements.stateButtons) {
    button.addEventListener("click", () => {
      const state = button.dataset.state || "success";
      const url = new URL(window.location.href);
      url.searchParams.set("etat", state);
      window.history.replaceState({}, "", url);
      loadContent(state);
    });
  }
}

function setupMenu() {
  elements.menuButton?.addEventListener("click", () => {
    const willOpen = elements.menuButton.getAttribute("aria-expanded") !== "true";
    elements.menuButton.setAttribute("aria-expanded", String(willOpen));
    elements.navigation.classList.toggle("is-open", willOpen);
  });

  elements.navigation?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      elements.menuButton?.setAttribute("aria-expanded", "false");
      elements.navigation.classList.remove("is-open");
    }
  });
}

function start() {
  setupMenu();
  setupStateControls();
  const initialState = new URLSearchParams(window.location.search).get("etat") || "success";
  loadContent(initialState);
}

start();
