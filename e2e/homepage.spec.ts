import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should display the title and subtitle", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: /RELIX/i })).toBeVisible();
    await expect(page.getByText("Le dico Elix en plus rapide")).toBeVisible();
  });

  test("should have a search input", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.getByPlaceholder("Chercher un mot");
    await expect(searchInput).toBeVisible();
  });

  test("should have a link to vocabulary page", async ({ page }) => {
    await page.goto("/");

    const vocabLink = page.getByRole("link", { name: /Vocabulaire vu en cours/i });
    await expect(vocabLink).toBeVisible();
  });

  test("should navigate to vocabulary page when clicking the button", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /Vocabulaire vu en cours/i }).click();

    await expect(page).toHaveURL("/vocabulaire-vu-en-cours");
  });
});

