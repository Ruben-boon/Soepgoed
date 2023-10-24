import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageType } from "./imageType";

export const settingsType = defineType({
  name: "settings",
  type: "document",
  title: "Settings",
  fields: [
    defineField({ name: "name", type: "string", title: "Name author" }),
  ],
  icon: CogIcon,
});
