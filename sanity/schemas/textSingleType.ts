// ./schemas/heroType.ts

import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";


export const textSingleType = defineType({
  name: "textSingle",
  type: "object",
  title: "Text single",
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
        subtitle: "Text",
        media: TextIcon,
      };
    },
  },
});
