import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { blogPosts } from "@/data/blogPosts";

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  read: string;
  author?: string;
  image?: unknown;
  body?: unknown[];
  faq?: { question: string; answer: string }[];
  seoTitle?: string;
  seoDescription?: string;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

export const isSanityConfigured = Boolean(projectId);

export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: false })
  : null;

const postsQuery = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  "category": category->title,
  "author": author->name,
  "date": coalesce(publishedAt, _createdAt),
  "read": coalesce(readingTime, "5 min"),
  mainImage,
  body,
  faq[]{question, answer},
  "seoTitle": seo.title,
  "seoDescription": seo.description
}`;

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) return blogPosts;

  try {
    const posts = await sanityClient.fetch<BlogPost[]>(postsQuery);
    return posts.length ? posts : blogPosts;
  } catch {
    return blogPosts;
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function sanityImageUrl(source: unknown, width = 1200, height = 720) {
  if (!sanityClient || !source) return null;
  return imageUrlBuilder(sanityClient).image(source).width(width).height(height).fit("crop").url();
}
