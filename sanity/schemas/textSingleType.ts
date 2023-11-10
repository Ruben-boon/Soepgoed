// ./schemas/heroType.ts

import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";


export const textSingleType = defineType({
  name: "textSingle",
  type: "object",
  title: "Text single",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  icon: TextIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Single Text",
        subtitle: "Single text",
        media: TextIcon,
      };
    },
  },
});
