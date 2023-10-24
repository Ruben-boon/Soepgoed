import { ImagesIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { buttonType } from "./buttonType";

export const carouselType = defineType({
  name: "carousel",
  type: "object",
  title: "Carousel",
  fields: [
    defineField({ name: "heading", type: "string", title: "Heading" }),
    buttonType,
  ],
  icon: ImagesIcon,
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Carousel of recent posts",
      };
    },
  },
});
