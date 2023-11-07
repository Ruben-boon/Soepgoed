import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  type: "document",
  title: "Posts",
  fields: [
    defineField({ name: "heading", type: "string", title: "Post title" }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "Click generate after settings a title, its used for the url",
      options: {
        source: "heading",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
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
      description: "Describe the image for screen readers",
      placeholder: "Please describe the image for screen readers",
    }),
    defineField({ name: "excerpt", type: "string", title: "Excerpt", description: "Short description of the post this appear in the thumbnail"}),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  icon: BlockContentIcon,
});
