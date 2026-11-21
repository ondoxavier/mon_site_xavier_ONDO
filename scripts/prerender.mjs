// Injecte le HTML rendu côté serveur dans dist/index.html
// pour un premier affichage immédiat et un meilleur référencement.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssrEntry = path.resolve("dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const indexPath = path.join(dist, "index.html");
const template = fs.readFileSync(indexPath, "utf8");
const start = template.indexOf('<div id="root">');
const end = template.indexOf("</div>", template.indexOf("</noscript>")) + "</div>".length;
if (start === -1 || end < start) throw new Error("Conteneur #root introuvable dans dist/index.html");

fs.writeFileSync(indexPath, template.slice(0, start) + `<div id="root">${appHtml}</div>` + template.slice(end));
fs.rmSync(path.resolve("dist-ssr"), { recursive: true, force: true });
console.log(`Prerender OK (${(appHtml.length / 1024).toFixed(1)} kB de HTML)`);
