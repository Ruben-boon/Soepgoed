// ./schemas/heroType.ts

import { EditIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";

export const textAndFormType = defineType({
  name: "textAndForm",
  type: "object",
  title: "Text and form",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    buttonType,
    defineField({
      name: "formFields",
      title: "Form fields",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: ["name", "email", "phone", "people", "date", "message"],
      },
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
