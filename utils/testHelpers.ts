// utils/testHelpers.ts
import { Page, expect, Locator } from "@playwright/test";

/**
 * Espera a que la página esté estable y la bandeja de entrada sea visible.
 * No necesita que le pases locators desde los tests.
 */
export async function waitForInboxLoaded(page: Page) {
  // Espera a que la red esté casi quieta
  await page.waitForLoadState("networkidle");
}

/**
 * Cierra popups comunes después de login (cookies, tutorial, etc.)
 */
export async function dismissPostLoginPopups(page: Page) {

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
