import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o84b2tuv";
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
  "image": mainImage,
  body,
  faq[]{question, answer},
  "seoTitle": seo.title,
  "seoDescription": seo.description
}`;

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!sanityClient) return blogPosts;

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const posts = await sanityClient.fetch<BlogPost[]>(postsQuery);
      return posts.length ? posts : blogPosts;
    } catch (error) {
      console.error(`Falha ao consultar o Sanity (tentativa ${attempt}/3):`, error);
      if (attempt < 3) {
        await new Promise(resolve => setTimeout(resolve, attempt * 750));
      }
    }
  }

  return blogPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug);
}

export function sanityImageUrl(source: unknown, width = 1200, height = 720) {
  if (!sanityClient || !source) return null;

  const image = source as { asset?: { _ref?: string; _id?: string } };
  if (!image.asset?._ref && !image.asset?._id) return null;

  try {
    return createImageUrlBuilder(sanityClient).image(source).width(width).height(height).fit("crop").url();
  } catch {
    return null;
  }
}
