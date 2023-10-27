export default {
  name: "navSubType",
  title: "Menu Settings",
  type: "document",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Logo",
      description: "Company logo that appears in the navigation bar",
    },
    {
      name: "menu",
      type: "array",
      title: "Menu links",
      description: "Links to pages that appear in the navigation bar (in order)",
      of: [
        {
          type: "reference", // Use the reference type for linking to page documents
          to: [{ type: "page", weak: true }], // Replace "yourPageDocumentType" with the actual type of your page documents
        },
      ],
    },
    {
      title: "Button",
      name: "button",
      type: "string",
      description: "The last item in the navigation bar can be a button",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Outline", value: "outline" },
          { title: "No button", value: "none" },
        ],
        layout: "radio",
      },
    },
  ],
};
