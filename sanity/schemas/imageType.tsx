import { defineField, defineType } from "sanity";

export const imageType = defineField({
  name: "imageGroup",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "toggle",
      initialValue: false,
      type: "boolean",
      title: "Image",
      description: "Enable / disable image",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.toggle === false,
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          // @ts-ignore
          if (context.parent?.toggle && !fieldValue) {
            return "This field is required when Image Toggle is true.";
          }
          return true;
        }),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      placeholder: "Please describe the image for screen readers",
      hidden: ({ parent }) => parent?.toggle === false,
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          // @ts-ignore
          if (context.parent?.toggle && !fieldValue) {
            return "This field is required when Image Toggle is true.";
          }
          return true;
        }),
    }),
  ],
});
