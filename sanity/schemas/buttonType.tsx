import { defineField, defineType } from "sanity";

export const buttonType = defineField({
  name: "buttonGroup",
  title: "Button",
  type: "object",
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: "buttonToggle",
      initialValue: false,
      type: "boolean",
      title: "Button",
      description: "Enable / disable button",
    }),
    defineField({
      name: "buttonLink",
      type: "reference",
      to: [{ type: "page"}],
      title: "Button link",
      description: "Select a page to link to",
      hidden: ({ parent }) => parent?.buttonToggle === false,
      // @ts-ignore
      validation: (Rule) =>
      Rule.custom((fieldValue, context) => {
        // @ts-ignore
        if (context.parent?.buttonToggle && !fieldValue) {
          return "This field is required when Image Toggle is true.";
        }
        return true;
      }),
    }),
    defineField({
      name: "buttonText",
      type: "string",
      title: "Button text",
      hidden: ({ parent }) => parent?.buttonToggle === false,
      // @ts-ignore
      validation: (Rule) =>
        Rule.custom((fieldValue, context) => {
          // @ts-ignore
          if (context.parent?.buttonToggle && !fieldValue) {
            return "This field is required when Image Toggle is true.";
          }
          return true;
        }),
    }),
    defineField({
      name: "buttonVariant",
      type: "string",
      title: "Button variant",
      initialValue: "primary",
      hidden: ({ parent }) => parent?.buttonToggle === false,
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Outline", value: "outline" },
        ],
        layout: "radio",
      },
    }),
  ],
});

