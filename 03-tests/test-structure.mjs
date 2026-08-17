import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const packRoot = resolve(currentDirectory, "..");
const siteRoot = join(packRoot, "02-mini-site-v2");

const requiredFiles = [
  "index.html", "css/styles.css", "js/app.js", "data/data.json",
  "assets/images/logo-rewire.svg", "assets/images/illustration-hero.svg",
  "assets/images/methode-revelation.svg", "assets/images/methode-desactivation.svg",
  "assets/images/methode-construction.svg", "assets/images/methode-installation.svg"
  , "assets/media/video-presentation-rewire.mp4"
  , "assets/media/affiche-master-classe-rewire-21-aout-2026.jpeg"
  , "assets/media/affiche-programme-rewire-21-aout-2026.png"
];

const module06Files = [
  "06-module-06-git-github/README-CAS-MODULE-06.md",
  "06-module-06-git-github/WORKFLOW-GIT-GITHUB.md",
  "06-module-06-git-github/COMMANDES-GIT.md",
  "06-module-06-git-github/PLAN-SEANCES-21-A-24.md",
  "06-module-06-git-github/.gitignore",
  "06-module-06-git-github/.github/pull_request_template.md",
  "06-module-06-git-github/.github/ISSUE_TEMPLATE/amelioration.yml"
];

const results = [];

async function test(name, operation) {
  try {
    await operation();
    results.push({ name, status: "PASS" });
  } catch (error) {
    results.push({ name, status: "FAIL", message: error.message });
  }
}

await test("Fichiers obligatoires présents", async () => {
  await Promise.all(requiredFiles.map((file) => access(join(siteRoot, file))));
});

const jsonText = await readFile(join(siteRoot, "data/data.json"), "utf8");
const html = await readFile(join(siteRoot, "index.html"), "utf8");
const javascript = await readFile(join(siteRoot, "js/app.js"), "utf8");

let data;
await test("JSON syntaxiquement valide", async () => {
  data = JSON.parse(jsonText);
  assert.equal(typeof data, "object");
});

await test("Structure JSON complète", async () => {
  assert.ok(data);
  for (const key of ["meta", "hero", "author", "projectAxes", "pillars", "resources", "method", "validation", "faq"]) {
    assert.ok(key in data, `Champ absent : ${key}`);
  }
  for (const key of ["projectAxes", "pillars", "resources", "method", "faq"]) {
    assert.ok(Array.isArray(data[key]), `${key} doit être un tableau`);
  }
  assert.equal(data.author.fullName, "Mohamed BOUMRAH", "Le nom public doit suivre la fiche candidature");
  assert.equal(data.author.organization, "DEEP PERFORMANCE");
  assert.equal(data.projectAxes.length, 4, "Quatre axes de production sont attendus");
  assert.equal(data.resources.length, 4, "Quatre étapes REWIRE sont attendues");
  assert.equal(data.method.length, 6, "Six étapes techniques sont attendues");
});

await test("Étapes REWIRE conformes à l’affiche", async () => {
  assert.deepEqual(data.resources.map((item) => item.title), ["Révélation", "Désactivation", "Construction", "Installation"]);
});

await test("Identifiants des cartes uniques", async () => {
  const ids = data.resources.map((resource) => resource.id);
  assert.equal(new Set(ids).size, ids.length);
});

await test("Images JSON disponibles", async () => {
  await Promise.all(data.resources.map((resource) => access(join(siteRoot, resource.image))));
});

await test("Chargement par fetch présent", async () => {
  assert.match(javascript, /fetch\(DATA_URL/);
  assert.match(javascript, /response\.ok/);
  assert.match(javascript, /response\.json\(\)/);
});

await test("Quatre états prévus", async () => {
  for (const state of ["loading", "success", "empty", "error"]) {
    assert.ok(javascript.includes(`"${state}"`), `État absent : ${state}`);
    assert.ok(html.includes(`data-state="${state}"`), `Bouton absent : ${state}`);
  }
});

await test("Aucun service worker enregistré dans la V2", async () => {
  assert.doesNotMatch(javascript, /serviceWorker\.register/);
  assert.doesNotMatch(html, /manifest\.webmanifest/);
});

await test("Aucune coordonnée personnelle ni secret", async () => {
  const combined = `${jsonText}\n${html}\n${javascript}`;
  assert.doesNotMatch(combined, /sk-[A-Za-z0-9_-]{20,}/);
  assert.doesNotMatch(combined, /AKIA[0-9A-Z]{16}/);
  assert.doesNotMatch(combined, /-----BEGIN (RSA |EC |OPENSSH )?PRIVATE KEY-----/);
  assert.doesNotMatch(combined, /(?:\+?212|0)[\s.-]*[5-7](?:[\s.-]*\d){8}/, "Aucun téléphone privé ne doit être publié");
  assert.doesNotMatch(combined, /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i, "Aucune adresse email privée ne doit être publiée");
});

await test("Profil auteur rendu depuis le JSON", async () => {
  assert.match(html, /id="projet-auteur"/);
  assert.match(html, /id="author-name"/);
  assert.match(javascript, /renderAuthor\(data\.author\)/);
  assert.match(javascript, /renderProjectAxes\(data\.projectAxes\)/);
});

await test("Médias REWIRE intégrés de manière accessible", async () => {
  assert.match(html, /<video[^>]+controls/);
  assert.doesNotMatch(html, /<video[^>]+autoplay/);
  assert.match(html, /assets\/media\/video-presentation-rewire\.mp4/);
  assert.match(html, /id="masterclass"/);
  assert.match(html, /affiche-master-classe-rewire-21-aout-2026\.jpeg/);
  assert.match(html, /affiche-programme-rewire-21-aout-2026\.png/);
});

await test("CTA sociaux sécurisés", async () => {
  assert.match(html, /https:\/\/web\.facebook\.com\/reel\/972243289170969/);
  assert.match(html, /https:\/\/www\.tiktok\.com\/@deep\.performance0\/video\/7674762831010483476/);
  assert.match(html, /https:\/\/www\.tiktok\.com\/@deep\.performance0/);
  const externalLinks = [...html.matchAll(/<a[^>]+href="https:\/\/[^>]+>/g)].map((match) => match[0]);
  assert.ok(externalLinks.length >= 3);
  for (const link of externalLinks) {
    assert.match(link, /target="_blank"/);
    assert.match(link, /rel="noopener noreferrer"/);
  }
});

await test("Dossier Module 06 complet", async () => {
  await Promise.all(module06Files.map((file) => access(join(packRoot, file))));
});

console.log("\nCONTRÔLE STRUCTUREL — REWIRE-90-PROJECT\n");
for (const result of results) {
  const suffix = result.message ? ` — ${result.message}` : "";
  console.log(`${result.status.padEnd(4)}  ${result.name}${suffix}`);
}

const failures = results.filter((result) => result.status === "FAIL");
console.log(`\nRésultat : ${results.length - failures.length}/${results.length} contrôles réussis.`);
if (failures.length) process.exitCode = 1;
