import { createClient, groq } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-02-08",
  useCdn: false,
};
const client = createClient(config);

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
    const projects = await client.fetch(
      groq`*[_type == 'post']
      | order(_createdAt desc)
      | limit(${amount}})
    `
    );
    return projects;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return null;
  }
}
