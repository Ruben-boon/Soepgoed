// ./schemas/heroType.ts

import { DocumentsIcon, DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        defineField({
          name: "hero",
          type: "hero",
          title: "Hero",
        }),
        defineField({
          name: "textSingle",
          type: "textSingle",
          title: "Text",
        }),
        defineField({
          name: "textAndImage",
          type: "textAndImage",
          title: "Text with image",
        }),
        defineField({
          name: "feature",
          type: "feature",
          title: "Feature",
        }),
        defineField({
          name: "carousel",
          type: "carousel",
          title: "Carousel",
        }),
      ],
    }),
  ],
  icon: DocumentsIcon,
});
