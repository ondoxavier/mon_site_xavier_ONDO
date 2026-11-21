import { test, expect } from "@playwright/test";

test("la page se charge sans erreur console", async ({ page }) => {
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Xavier ONDO ESSONO");
  await page.waitForLoadState("networkidle");
  expect(errors).toEqual([]);
});

test("toutes les ressources et liens internes répondent 200", async ({ page, request }) => {
  await page.goto("/");
  const urls = await page.evaluate(() => {
    const set = new Set();
    document.querySelectorAll("img[src], a[href^='/'], link[href^='/']").forEach((el) => {
      set.add(el.getAttribute("src") || el.getAttribute("href"));
    });
    ["/favicon.svg", "/robots.txt", "/sitemap.xml", "/assets/og-image.jpg"].forEach((u) => set.add(u));
    return [...set];
  });
  for (const url of urls) {
    const res = await request.get(url);
    expect(res.status(), url).toBe(200);
  }
});

test("les ancres de navigation pointent vers des sections existantes", async ({ page }) => {
  await page.goto("/");
  const hrefs = await page.locator("a[href^='#']").evaluateAll((els) => els.map((a) => a.getAttribute("href")));
  for (const href of new Set(hrefs)) {
    await expect(page.locator(href), href).toHaveCount(1);
  }
});

test("pas de débordement horizontal", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});

test("le menu mobile s'ouvre et se ferme", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile uniquement");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Ouvrir le menu" });
  await toggle.click();
  const link = page.locator("#main-nav").getByRole("link", { name: "Projets" });
  await expect(link).toBeVisible();
  await link.click();
  await expect(page.getByRole("button", { name: "Ouvrir le menu" })).toBeVisible();
});

test("capture pleine page", async ({ page }, info) => {
  test.setTimeout(60_000);
  await page.goto("/");
  // Défilement réel pour déclencher le chargement différé des images
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 400) {
    await page.mouse.wheel(0, 400);
    await page.waitForTimeout(60);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() => [...document.images].every((img) => img.complete && img.naturalWidth > 0));
  await page.screenshot({ path: `screenshots/${info.project.name}.png`, fullPage: true });
});

test("le HTML est pré-généré (contenu visible sans JavaScript)", async ({ request }) => {
  const html = await (await request.get("/")).text();
  expect(html).toContain("Parcours professionnel");
  expect(html).toContain("Alstom Transport");
});
