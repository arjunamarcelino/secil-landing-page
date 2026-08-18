import { test, expect } from "@playwright/test";

/*
  Smoke coverage for the one-page site + the blog list/detail and program detail.
  Dynamic slugs are pinned in the fallback fixtures (src/content/fallback/*).
*/
const routes: ReadonlyArray<{ path: string; heading: RegExp }> = [
  { path: "/", heading: /berhak/i },
  { path: "/cerita", heading: /kisah dan laporan/i },
  { path: "/cerita/cerita-kecil-dari-kelas-baca", heading: /kelas baca/i },
  { path: "/cerita/laporan-bulan-buku-ceria-2026", heading: /bulan buku ceria/i },
  { path: "/program/kelas-baca-ceria", heading: /kelas baca ceria/i },
];

for (const route of routes) {
  test(`${route.path} returns 200 and renders its heading`, async ({ page }) => {
    const response = await page.goto(route.path);
    expect(response?.status(), `HTTP status for ${route.path}`).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.locator("h1").first()).toContainText(route.heading);
  });
}

test("home page has all navigable section anchors", async ({ page }) => {
  await page.goto("/");
  for (const id of ["tentang", "program", "cerita", "relawan", "donasi"]) {
    await expect(page.locator(`#${id}`)).toBeAttached();
  }
});

test("navbar links point at section anchors", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("navigation", { name: /navigasi utama/i }).getByRole("link", { name: "Tentang" }).first(),
  ).toHaveAttribute("href", "/#tentang");
});

test("unknown program slug returns 404", async ({ page }) => {
  const response = await page.goto("/program/slug-yang-tidak-ada");
  expect(response?.status()).toBe(404);
});

test("unknown story slug returns 404", async ({ page }) => {
  const response = await page.goto("/cerita/slug-yang-tidak-ada");
  expect(response?.status()).toBe(404);
});

test("main landmark and skip link are present on the home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main#konten")).toBeAttached();
  await expect(page.getByRole("link", { name: /lompat ke konten/i })).toBeAttached();
});
