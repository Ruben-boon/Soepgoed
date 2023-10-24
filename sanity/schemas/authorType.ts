import { UsersIcon, UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  type: "document",
  title: "Authors",
  fields: [
    defineField({ name: "name", type: "string", title: "Name author", icon: UserIcon })
  ],
  icon: UsersIcon,
});
