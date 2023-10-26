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
        buttonGroup,
        buttonGroupTwo,
        textPosition
      }`
    );
    console.log(pageData);
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
