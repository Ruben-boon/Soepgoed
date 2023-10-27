export const myStructure = (S) =>
  S.list()
    .title("Content management")
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["settingsSubType", "footerSubType", "navSubType", "contactSubType", "metaDataSubType"].includes(
            listItem.getId()
          )
      ),
      S.divider(),

      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings")
            // Add items to the array
            // Each will pull one of our new singletons (subtypes)
            .items([
              S.listItem()
                .title("Metadata")
                .child(
                  S.document()
                    .schemaType("metaDataSubType")
                    .title("Metadata settings")
                    .documentId("metaDataSubType")
                ),
              S.listItem()
                .title("Navigation")
                .child(
                  S.document()
                    .schemaType("navSubType")
                    .title("Navigation settings")
                    .documentId("navSubType")
                ),
              S.listItem()
                .title("Footer")
                .child(
                  S.document()
                    .schemaType("footerSubType")
                    .title("Footer settings")
                    .documentId("footerSubType")
                ),
              S.listItem()
                .title("Contact information")
                .child(
                  S.document()
                    .schemaType("contactSubType")
                    .title("Contact Information")
                    .documentId("contactSubType")
                ),
              //   S.listItem()
              //     .title("Site Colors")
              //     .child(S.document().schemaType("colorsSubType").documentId("colorsSubType")),
            ])
        ),
      // Remove the settings from the main list
      
    ]);

