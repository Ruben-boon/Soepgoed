// ./schemas/heroType.ts

import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageType } from "./imageType";
import { buttonType } from "./buttonType";
import { buttonTypeTwo } from "./buttonTypeTwo";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "paragraph",
      type: "string",
    }),
    imageType,
    buttonType,
    buttonTypeTwo,
    defineField({
      name: "layout",
      type: "string",
      title: "Layout",
      options: {
        list: [
          { title: "Split - Text left", value: "splitTextLeft" },
          { title: "Split - Text Right", value: "splitTextRight" },
          { title: "Text only - Text Left", value: "textOnlyTextLeft" },
          { title: "Text only - Text Right", value: "textOnlyTextRight" },
          { title: "Text only - Text Center", value: "textOnlyTextCenter" },
          { title: "Image full - Text Left", value: "imageFullTextLeft" },
          { title: "Image full - Text Right", value: "imageFullTextRight" },
          { title: "Image full - No Text", value: "imageFullNoText" },
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
        subtitle: "Hero",
        media: image || ImageIcon,
      };
    },
  },
});
