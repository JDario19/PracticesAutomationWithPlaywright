// utils/testHelpers.ts
import { Page, expect, Locator } from "@playwright/test";

/**
 * Espera a que la página esté estable y la bandeja de entrada sea visible.
 * No necesita que le pases locators desde los tests.
 */
export async function waitForInboxLoaded(page: Page) {
  // Espera a que la red esté casi quieta
  await page.waitForLoadState("networkidle");

  // Localiza el heading "Bandeja de entrada"
  const inboxHeading: Locator = page.getByRole("heading", {
    name: "Bandeja de entrada",
  });

  // Espera a que el heading sea visible
  await expect(inboxHeading).toBeVisible({ timeout: 90000 });
}

/**
 * Cierra popups comunes después de login (cookies, tutorial, etc.)
 */
export async function dismissPostLoginPopups(page: Page) {
  // popup de cookies
  const cookies = page.getByRole("button", { name: /Aceptar todo|Aceptar/i });

  try {
    if (await cookies.isVisible({ timeout: 9000 })) {
      await cookies.click();
    }
  } catch (_) {
    /* ignorar si no aparece */
  }

  // popup de tutorial, onboarding, etc.
  const guide = page.getByRole("button", { name: /Cerrar|Entendido|Ok/i });

  try {
    if (await guide.isVisible({ timeout: 9000 })) {
      await guide.click();
    }
  } catch (_) {
    /* ignorar */
  }
}

/**
 * Helper completo para usar en tests:
 * - cierra popups
 * - espera bandeja de entrada
 */
export async function ensurePostLoginReady(page: Page) {
  await dismissPostLoginPopups(page);
  await waitForInboxLoaded(page);
}
