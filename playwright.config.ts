import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: process.env.CI
    ? [
        ['junit', { outputFile: 'test-results/junit/results.xml' }],
        ['blob', { outputDir: 'blob-report' }],  // 👈 explícito para CircleCI
        ['line'],
      ]
    : [
        ['html', { open: 'on-failure' }],        // 👈 UI local con npx playwright show-report
      ],

  use: {
    baseURL: process.env.BASE_URL || 'https://www.todoist.com/home',
    trace: 'on-first-retry',          // 👈 esto activa Trace Viewer en el HTML
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
