import { test, expect } from "@playwright/test";

test.describe("Search functionality", () => {
  test("should update URL when typing in search", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.getByPlaceholder("Chercher un mot");
    await searchInput.fill("bonjour");

    // Wait for debounce and URL update
    await page.waitForURL("/?q=bonjour");

    await expect(page).toHaveURL("/?q=bonjour");
  });

  test("should display search results", async ({ page }) => {
    await page.goto("/?q=bonjour");

    // Wait for results to load
    await expect(page.getByText("bonjour", { exact: false }).first()).toBeVisible({
      timeout: 10000,
    });
  });

  test("should load search from URL parameter", async ({ page }) => {
    await page.goto("/?q=merci");

    const searchInput = page.getByPlaceholder("Chercher un mot");
    await expect(searchInput).toHaveValue("merci");
  });

  test("should show no results message for unknown word", async ({ page }) => {
    await page.goto("/?q=xyznonexistent");

    await expect(page.getByText(/Aucun résultat/i)).toBeVisible({
      timeout: 10000,
    });
  });
});

