import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const threeColumnsType = defineType({
  name: "threeColumns",
  type: "object",
  title: "Three Columns",
  fields: [
    defineField({
      name: "column1Content",
      type: "object",
      title: "Column 1",
      //@ts-ignore
      fields: [
        defineField({
          name: "image1",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        }),
        defineField({
          name: "alt1",
          type: "string",
          title: "Alternative text",
          placeholder: "Please describe the image for screen readers",
        }),
      ],
    }),
    defineField({
      name: "column2Content",
      type: "object",
      title: "Column 2",
      fields: [
        defineField({
          name: "image2",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        }),
        defineField({
          name: "alt2",
          type: "string",
          title: "Alternative text",
          placeholder: "Please describe the image for screen readers",
        }),
      ],
    }),
    defineField({
      name: "column3Content",
      type: "object",
      title: "Column 3",
      fields: [
        defineField({
          name: "image3",
          type: "image",
          title: "Image",
          options: { hotspot: true },
        }),
        defineField({
          name: "alt3",
          type: "string",
          title: "Alternative text",
          placeholder: "Please describe the image for screen readers",
        }),
      ],
    }),
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

