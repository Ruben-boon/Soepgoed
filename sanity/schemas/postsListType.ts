import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const postsListType = defineType({
  name: "postsList",
  type: "object",
  title: "List of all posts",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      title: "Heading",
    }),
    defineField({
      name: "amount",
      type: "number",
      title: "Limit the number of posts to show",
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
        subtitle: "List of all posts",
        media: TextIcon,
      };
    },
  },
});
