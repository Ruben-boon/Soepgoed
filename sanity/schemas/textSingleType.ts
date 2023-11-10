// ./schemas/heroType.ts

import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";


export const textSingleType = defineType({
  name: "textSingle",
  type: "object",
  title: "Text",
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
          subtitle: "Text",
      };
    },
  },
});
