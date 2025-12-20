import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,

  // ⬇⬇⬇ IMPORTANTE
  timeout: isCI ? 90_000 : 30_000,            // timeout total por test
  expect: {
    timeout: isCI ? 15_000 : 5_000,           // timeout de los expect()
  },
  use: {
    baseURL: process.env.BASE_URL || 'https://www.todoist.com/home',

    navigationTimeout: isCI ? 60_000 : 30_000,
    actionTimeout: isCI ? 30_000 : 0,         // 0 = usar default local

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: isCI
    ? [
        ['junit', { outputFile: 'test-results/junit/results.xml' }],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['line'],
      ]
    : [['html', { open: 'on-failure' }]],

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
