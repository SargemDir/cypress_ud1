import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://todo.qacart.com",
    video: true, // включение записи видео
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureAttachRequests: true,
      allureAddVideoOnPass: true,
    },
  },
});
