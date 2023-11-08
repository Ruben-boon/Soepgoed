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
      name: "columns",
      title: "Columns",
      type: "string",
      options: {
        list: [
          { title: "1 Column", value: "1" },
          { title: "2 Columns", value: "2" },
          { title: "3 Columns", value: "3" },
        ],
      },
    },
    {
      name: "column1Content",
      title: "Column 1 Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "column2Content",
      title: "Column 2 Content",
      type: "array",
      of: [{ type: "block" }],
      hidden: ({ parent }) => parent?.columns !== "2" && parent?.columns !== "3",
    },
    {
      name: "column3Content",
      title: "Column 3 Content",
      type: "array",
      of: [{ type: "block" }],
      hidden: ({ parent }) => parent?.columns !== "3",
    },
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
