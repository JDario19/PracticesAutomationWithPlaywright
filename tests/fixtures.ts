import { test as base, expect } from "@playwright/test";
import { createPages, Pages } from "../utils/pages";

export const test = base.extend<{ pages: Pages }>({
  pages: async ({ page }, use) => {
    const pages = createPages(page);
    await use(pages);
  },
});

export { expect };
