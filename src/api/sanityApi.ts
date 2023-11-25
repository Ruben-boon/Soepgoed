import { createClient, groq } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-08",
  useCdn: true,
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
        "imageSrc": coalesce(
          imageGroup.image.asset->url ,
          image.asset->url,
        ),
        "imageAlt": coalesce(
          imageGroup.alt,
          alt
        ),
        "imageSrc1": column1Content.image1.asset->url,
        "imageAlt1": column1Content.alt1,
        "imageSrc2": column2Content.image2.asset->url,
        "imageAlt2": column2Content.alt2,
        "imageSrc3": column3Content.image3.asset->url,
        "imageAlt3": column3Content.alt3,
        'buttonGroup': {
          'buttonText': buttonGroup.buttonText,
          'buttonToggle': buttonGroup.buttonToggle,
          'buttonVariant': buttonGroup.buttonVariant,
          'buttonLink': buttonGroup.buttonLink->urlSlug.current
        },
        'buttonGroupTwo': {
          'buttonText': buttonGroupTwo.buttonText,
          'buttonToggle': buttonGroupTwo.buttonToggle,
          'buttonVariant': buttonGroupTwo.buttonVariant,
          'buttonLink': buttonGroupTwo.buttonLink->urlSlug.current
        },
        formFields,
        textPosition,
        content,
        layout,
        columns,
        column1Content,
        column2Content,
        column3Content,
        height,
      }`
    );
    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function fetchPosts(amount: number, excludePost: string | null) {
  try {
    const query = groq`*[_type == 'post'${
      excludePost ? ` && slug.current != "${excludePost}"` : ""
    }] | order(_createdAt desc) {
      '_key': _rev,
      heading,
      'slug': meta.slug.current,
      'imageSrc': image.asset->url,
      'imageAlt': alt,
      _createdAt,
      excerpt,
      "publishedAt": meta.publishedAt,
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
    }[0...${amount}]`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}

export async function fetchPostSingle(postSlug: string) {
  try {
    const post = await client.fetch(
      groq`*[_type == 'post' && meta.slug.current == '${postSlug}'][0]  {
        '_key': _rev,
        heading,
        'slug': meta.slug.current,
        "publishedAt": meta.publishedAt,
        'imageSrc': image.asset->url,
        'imageAlt': alt,
        _createdAt,
        content
      }`
    );
    console.log(post);
    return post;
  } catch (error) {
    console.error("Error fetching project data:", error);
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
            contentColumnOne,
            contentColumnTwo,
            "buttonGroup": {
              "buttonText": buttonGroup.buttonText,
              "buttonToggle": buttonGroup.buttonToggle,
              "buttonVariant": buttonGroup.buttonVariant,
              "buttonLink": buttonGroup.buttonLink->urlSlug.current
            },
            "buttonGroupTwo": {
              "buttonText": buttonGroupTwo.buttonText,
              "buttonToggle": buttonGroupTwo.buttonToggle,
              "buttonVariant": buttonGroupTwo.buttonVariant,
              "buttonLink": buttonGroupTwo.buttonLink->urlSlug.current
            },
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
export async function fetchContactInfo() {
  try {
    const posts = await client.fetch(
      groq`
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
        }
      `
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
    navSettings: {},
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
