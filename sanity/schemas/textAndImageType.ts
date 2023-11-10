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
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
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
      content: "content",
    },
    prepare(value) {
        // @ts-ignore
      const block = (value.content || []).find(
        //@ts-ignore
        (block) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              //@ts-ignore
              .filter((child) => child._type === "span")
              //@ts-ignore
              .map((span) => span.text)
              .join("")
          : "No title",
          subtitle: "Text with image",
      };
    },
  },
});
