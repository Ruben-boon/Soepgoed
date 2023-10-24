import { createClient, groq } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-08",
  useCdn: false,
};
export const client = createClient(config);

export async function fetchPage(pageName) {
  try {
    const pageData = await client.fetch(
      groq`*[_type == 'page' && title == '${pageName}'][0].pageBuilder[] {
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
    return pageData;
  } catch (error) {
    console.error("Error fetching page data:", error);
    return null;
  }
}

export async function fetchProjects(amount) {
  try {
    const posts = await client.fetch(
      groq`*[_type == 'post'] | order(_createdAt desc) {
        heading,
        paragraph,
        'imageSrc': image.asset->url,
        'imageAlt': alt,
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
    console.log(posts[0].content[0].children);
    return posts;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}
