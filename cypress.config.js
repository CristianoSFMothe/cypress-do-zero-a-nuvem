const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: process.env.CYPRESS_projectId,
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {}
});
