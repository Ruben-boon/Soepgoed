// ./schemas/heroType.ts

import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";


export const featureType = defineType({
  name: "feature",
  type: "object",
  title: "Feature",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      type: "string",
    }),
    buttonType,
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Feature",
        media: TextIcon,
      };
    },
  },
});
