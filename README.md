# 🧪 Practices Automation with Playwright

This repository is a **personal training project** created to improve and demonstrate my skills as a **QA Automation Engineer / SDET**, using **Playwright with TypeScript**.

The goal of this project is not only to automate UI flows, but also to apply **professional testing practices**, clean architecture, and real CI/CD integration.

---

## 🎯 Objectives

- Improve hands-on knowledge of **Playwright**
- Apply **Page Object Model (POM)** with separated locators
- Write **stable and maintainable UI tests**
- Handle **flaky tests and slow environments**
- Practice **real CI/CD pipelines**
- Simulate real-world QA Automation scenarios

---

## 🧰 Tech Stack

- **Playwright** (TypeScript)
- **Node.js**
- **Page Object Model (POM)**
- **GitHub Actions** (CI for pull requests)
- **CircleCI** (advanced CI pipeline)
- **dotenv** (environment variables)
- **HTML / JUnit reports**

---

## 📂 Project Structure

├── .circleci/
│ └── config.yml # CircleCI pipeline
├── .github/workflows/
│ └── playwright.yml # GitHub Actions workflow
├── Pages/
│ ├── LoginPage.ts
│ ├── MainPage.ts
│ ├── RegisterUser.ts
│ └── UserHomePage.ts
├── PagesObjects/
│ ├── LoginPage.locators.ts
│ ├── MainPage.locators.ts
│ ├── RegisterUser.locators.ts
│ └── UserHomePage.locators.ts
├── tests/
│ └── Users.spec.ts # Test cases
├── utils/
│ ├── env.ts # Environment variables helper
│ └── testHelpers.ts # Common waits and helpers
├── playwright.config.ts
├── package.json
└── README.md


---

## 🧠 Architecture Decisions

### Page Object Model (POM)

- **Actions and logic** live in `Pages/`
- **Selectors only** live in `PagesObjects/`
- This separation improves:
  - Maintainability
  - Readability
  - Scalability

---

## 🔐 Environment Variables

Sensitive data is handled via environment variables.

Required variables:
QA_USER
QA_PASS
QA_WRONGPASS


### Local usage

Create a `.env` file:



### CI usage

- GitHub Actions → **Repository Secrets**
- CircleCI → **Project Environment Variables**

The project intentionally fails fast if a required variable is missing.

---

## ▶️ Running Tests Locally

Install dependencies:

```bash
npm install

Install Playwright browsers:

npx playwright install

Run all tests:

npx playwright test

Run tests with UI:

npx playwright test --ui