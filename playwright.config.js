import { defineConfig, devices } from "@playwright/test";

// Tests contre le build de production (npm run build + vite preview).
// Pour tester le site en ligne : BASE_URL=https://xavierondo.com npm test
const baseURL = process.env.BASE_URL || "http://127.0.0.1:4173";

export default defineConfig({
  testDir: "./tests",
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "npm run build && npx vite preview --host 127.0.0.1 --port 4173 --strictPort",
        url: baseURL,
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
