import { defineField } from "sanity";
import SliderInput from "../lib/sliderInput";

export const imageFullType = defineField({
  name: "imageFull",
  title: "Image full width",
  description: "Cover image ",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      placeholder: "Please describe the image for screen readers",
    }),
    defineField({
      name: "height",
      title: "Image height",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "container",
      title: "Limit image width",
      type: "boolean",
      initialValue: false,
      description: "Limit the image width to the rest of the content",
    }),
  ],
});
