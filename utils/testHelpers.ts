// utils/testHelpers.ts
import { Page, expect } from "@playwright/test";

export async function waitForInboxLoaded(page: Page, inboxLocator) {
  // Espera a que la red esté casi quieta
  await page.waitForLoadState("networkidle");

  // Espera a que el heading "Bandeja de entrada" sea visible
  await expect(inboxLocator).toBeVisible({ timeout: 30000 });
}


export async function dismissPostLoginPopups(page: Page) {
  // popup de cookies
  const cookies = page.getByRole("button", { name: /Aceptar todo|Aceptar/i });

  try {
    if (await cookies.isVisible({ timeout: 2000 })) {
      await cookies.click();
    }
  } catch (_) {
    /* ignorar si no aparece */
  }

  // popup de tutorial, onboarding, etc.
  const guide = page.getByRole("button", { name: /Cerrar|Entendido|Ok/i });

  try {
    if (await guide.isVisible({ timeout: 2000 })) {
      await guide.click();
    }
  } catch (_) {
    /* ignorar */
  }
}
