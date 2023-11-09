// ./schemas/heroType.ts

import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";


export const textSingleType = defineType({
  name: "textSingle",
  type: "object",
  title: "Text single",
  options: { columns: 3 },
  groups: [
    {
      name: 'oneColumn',
      title: '1 Column',
      default: true,
    },
    {
      name: 'twoColumns',
      title: '2 Columns',
    },
    {
      name: 'threeColumns',
      title: '3 Columns',
    },
  ],
  fields: [
    {
      name: "column1Content",
      title: "Column 1 Content",
      type: "array",
      of: [{ type: "block" }],
      group:  ['oneColumn', 'twoColumns', 'threeColumns'],
    },
    {
      name: "column2Content",
      title: "Column 2 Content",
      type: "array",
      of: [{ type: "block" }],
      group:  ['twoColumns', 'threeColumns'],
    },
    {
      name: "column3Content",
      title: "Column 3 Content",
      type: "array",
      of: [{ type: "block" }],
      group: 'threeColumns',
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
