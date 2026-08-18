import { test, expect } from "@playwright/test";

/*
  Smoke coverage: every route returns 200 and renders its key section (an <h1>).
  Dynamic routes use slugs pinned in the fallback fixtures
  (PINNED_PROGRAM_SLUG / PINNED_ARTICLE_SLUG in src/content/fallback/*).
*/
const routes: ReadonlyArray<{ path: string; heading: RegExp }> = [
  { path: "/", heading: /berhak/i },
  { path: "/tentang", heading: /bertumbuh/i },
  { path: "/program", heading: /program/i },
  { path: "/program/kelas-baca-ceria", heading: /kelas baca ceria/i },
  { path: "/cerita", heading: /kisah/i },
  { path: "/cerita/cerita-kecil-dari-kelas-baca", heading: /kelas baca/i },
  { path: "/transparansi", heading: /keterbukaan/i },
  { path: "/volunteer", heading: /senyum mereka/i },
  { path: "/donasi", heading: /dukung/i },
];

for (const route of routes) {
  test(`${route.path} returns 200 and renders its heading`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status(), `HTTP status for ${route.path}`).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("h1").first()).toContainText(route.heading);
  });
}

test("unknown program slug returns 404", async ({ page }) => {
  const response = await page.goto("/program/slug-yang-tidak-ada");
  expect(response?.status()).toBe(404);
});

test("main landmark and skip link are present on the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main#konten")).toBeAttached();
  await expect(page.getByRole("link", { name: /lompat ke konten/i })).toBeAttached();
});
