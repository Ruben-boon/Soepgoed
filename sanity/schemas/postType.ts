import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  type: "document",
  title: "Posts",
  fields: [
    defineField({ name: "heading", type: "string", title: "Post title" }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alternative text",
      placeholder: "Please describe the image for screen readers",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "heading",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({ name: "date", type: "date", title: "Post date" }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  icon: BlockContentIcon,
});
