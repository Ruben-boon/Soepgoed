import { EditIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageType } from "./imageType";

export const contactInfoType = defineType({
  name: "contactInfo",
  type: "object",
  title: "Contact Info",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "contactFields",
      title: "Contact fields",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: ["name", "street", "postal", "phone", "email", "socials"],
      },
    }),
    imageType,
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
