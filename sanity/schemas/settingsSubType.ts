export default {
  name: "settingsSubType",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Website Title",
      description:
        "The name of the website that will appear in the browser tab",
      type: "string",
    },
    {
      name: "description",
      title: "Website Description",
      description: "Description that will appear in google search results",
      type: "text",
    },
  ],
};
