import { createClient, groq } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-08",
  useCdn: false,
};
export const client = createClient(config);

export async function fetchPage(pageUrl: string) {
  try {
    const pageData = await client.fetch(
      groq`*[_type == 'page' && urlSlug.current == '${pageUrl}'][0].pageBuilder[] {
        _type,
        _key,
        heading,
        paragraph,
        'imageSrc': imageGroup.image.asset->url,
        'imageAlt': imageGroup.alt,
        'buttonGroup': {
          'buttonText': buttonGroup.buttonText,
          'buttonToggle': buttonGroup.buttonToggle,
          'buttonVariant': buttonGroup.buttonVariant,
          'buttonLink': buttonGroup.buttonLink->urlSlug.current
        },
        'buttonGroupTwo': {
          'buttonText': buttonGroup.buttonText,
          'buttonToggle': buttonGroup.buttonToggle,
          'buttonVariant': buttonGroup.buttonVariant,
          'buttonLink': buttonGroup.buttonLink->urlSlug.current
        },
        formFields,
        textPosition,
        content,
        layout
      }`
    );
    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function fetchPosts(amount: number) {
  try {
    const posts = await client.fetch(
      groq`*[_type == 'post'] | order(_createdAt desc) {
        '_key': _rev,
        heading,
        'imageSrc': image.asset->url,
        'imageAlt': alt,
        _createdAt,
        content[] {
          _key,
          _type,
          children[] {
            _key,
            _type,
            marks,
            text
          },
          markDefs,
          style
        }
      }`
    );
    return posts;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}

export async function fetchSettings() {
  try {
    const posts = await client.fetch(
      groq`[
        *[_type == "metaDataSubType"] | order(_createdAt asc) [0] {
          "metaData": {
            "title": title,
              "description": description
          }
        },
        *[_type == "contactSubType"] | order(_createdAt asc) [0] {
          "contactInfo": {
            "companyName": companyName,
            "companyStreet": companyStreet,
            "companyPostal": companyPostal,
            "companyPhone": companyPhone,
            "companyEmail": companyEmail,
            "companyInstagram": companyInstagram,
            "companyFacebook": companyFacebook,
            "companyLinkedIn": companyLinkedIn,
              "copyright": copyright
          }
        },
        *[_type == "footerSubType"] | order(_createdAt asc) [0] {
          "footerSettings": {
            "banner": bannerToggle,
            "heading": heading,
            "paragraph": paragraph,
            "buttonGroup": {
              "buttonText": buttonGroup.buttonText,
              "buttonToggle": buttonGroup.buttonToggle,
              "buttonVariant": buttonGroup.buttonVariant,
              "buttonLink": buttonGroup.buttonLink->urlSlug.current
            }
          }
        },
        *[_type == "navSubType"] {
          "menu": menu[]->{
            "label": title,
            "_key": _id,
            "url": urlSlug.current
          },
        },
        *[_type == "navSubType"] | order(_createdAt asc) [0] {
          "navSettings": {
            "logoSrc": image.asset->url,
            "button": button,
          }
        }
      ]`
    );
    return posts;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}

export function formatSettingsData(dataArray: any[]) {
  const extractedData = {
    metadata: {},
    contactInfo: {},
    footerSettings: {},
    navSettings: {
    },
    menu: [],
  };

  for (const item of dataArray) {
    if (item.metaData) {
      extractedData.metadata = item.metaData;
    } else if (item.contactInfo) {
      extractedData.contactInfo = item.contactInfo;
    } else if (item.footerSettings) {
      extractedData.footerSettings = item.footerSettings;
    } else if (item.navSettings) {
      extractedData.navSettings = item.navSettings;
    } else if (Array.isArray(item) && item[0].menu) {
      extractedData.menu = item[0].menu;
    }
  }

  return extractedData;
}