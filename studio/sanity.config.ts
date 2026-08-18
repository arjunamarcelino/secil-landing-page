import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes, SINGLETON_TYPES } from "./schemas";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "Senyum Kecil Medan",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "your_project_id",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    // Singletons (Site Settings) cannot be duplicated or deleted.
    actions: (prev, { schemaType }) =>
      SINGLETON_TYPES.has(schemaType)
        ? prev.filter(({ action }) => action && !["duplicate", "delete", "unpublish"].includes(action))
        : prev,
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global"
        ? prev.filter((item) => !SINGLETON_TYPES.has(item.templateId))
        : prev,
  },
});
