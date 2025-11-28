import { test, expect } from "@playwright/test";

test.describe("Vocabulary page", () => {
  test("should display the page title", async ({ page }) => {
    await page.goto("/vocabulaire-vu-en-cours");

    await expect(page.getByRole("heading", { name: /Vocabulaire vu en cours/i })).toBeVisible();
  });

  test("should display word buttons", async ({ page }) => {
    await page.goto("/vocabulaire-vu-en-cours");

    // Check some words from the list are visible
    await expect(page.getByRole("link", { name: "femme" })).toBeVisible();
    await expect(page.getByRole("link", { name: "maman" })).toBeVisible();
    await expect(page.getByRole("link", { name: "merci" })).toBeVisible();
  });

  test("should navigate to search when clicking a word", async ({ page }) => {
    await page.goto("/vocabulaire-vu-en-cours");

    await page.getByRole("link", { name: "femme" }).click();

    await expect(page).toHaveURL("/?q=femme");
  });

  test("should navigate back to homepage when clicking the logo", async ({ page }) => {
    await page.goto("/vocabulaire-vu-en-cours");

    await page.getByRole("link", { name: /RELIX/i }).click();

    await expect(page).toHaveURL("/");
  });
});

