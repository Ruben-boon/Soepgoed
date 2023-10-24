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
