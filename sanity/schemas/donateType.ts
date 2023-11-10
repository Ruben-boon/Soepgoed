import { EditIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const donateType = defineType({
  name: "donate",
  type: "object",
  title: "Donate",
  fields: [
    defineField({
        name: "column1Content",
        title: "Column 1 Content",
        type: "array",
        of: [{ type: "block" }],
    }),
    defineField({
        name: "column2Content",
        title: "Column 2 Content",
        type: "array",
        of: [{ type: "block" }],
    }),

    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      description: "Text position",
      options: {
        list: [
          { title: "Left", value: "textLeft" },
          { title: "Right", value: "textRight" },
        ],
      },
    }),
  ],
  icon: EditIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text and Form",
        media: image || EditIcon,
      };
    },
  },
});
