// ./schemas/heroType.ts

import { DocumentsIcon, DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Pages",
  fields: [
    defineField({ name: "title", type: "string",  validation: Rule => Rule.required() }),
    defineField({ name: "urlSlug", title: "Url Slug",
    description: "Http://www.example.com/ URL",
    type: "slug",
    options: {
      source: 'title',
      maxLength: 200, // will be ignored if slugify is set
      slugify: input => input
                           .toLowerCase()
                           .replace(/\s+/g, '-')
                           .slice(0, 200)
    },
    validation: Rule => Rule.required(),
    // @ts-ignore
    // hidden: ({ document }) => document.title === "Home",
   }),
    defineField({
      name: "pageBuilder",
      title: "Page Builder",
      type: "array",
      of: [
        defineField({
          name: "hero",
          type: "hero",
          title: "Hero",
        }),
        defineField({
          name: "textSingle",
          type: "textSingle",
          title: "Text",
        }),
        defineField({
          name: "textAndImage",
          type: "textAndImage",
          title: "Text and image",
        }),
        defineField({
          name: "feature",
          type: "feature",
          title: "Feature",
        }),
        defineField({
          name: "carousel",
          type: "carousel",
          title: "Carousel ofpPosts",
        }),
        defineField({
          name: "textAndForm",
          type: "textAndForm",
          title: "Text and form",
        }),
        defineField({
          name: "postsList",
          type: "postsList",
          title: "List of all posts",
        }),
      ],
    }),
  ],
  icon: DocumentsIcon,
});
