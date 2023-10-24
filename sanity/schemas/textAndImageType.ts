// ./schemas/heroType.ts

import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";
import { imageType } from "./imageType";


export const textAndImageType = defineType({
  name: "textAndImage",
  type: "object",
  title: "Text and image",
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
    imageType,
    defineField({
      name: "textPosition",
      title: "Text position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "textLeft" },
          { title: "Right", value: "textRight" },
        ],
      },
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text and Image",
        media: image || ImageIcon,
      };
    },
  },
});
