import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  studioHost: "africa-positiva",
  deployment: {
    appId: "phjnmo7v43snekac3oxlojc5"
  },
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || "",
    dataset: process.env.SANITY_STUDIO_DATASET || "production"
  }
});
