import { defineCollection, z } from "astro:content";

const tutorials = defineCollection({
  type: "content",
  schema: z.object({
    tutorialName: z.string(),
    title: z.string(),
    url: z.string(),
    chapter: z.string(),
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    topics: z.array(z.string()),
    url: z.string(),
  }),
});

const tutorialsBasicData = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    level: z.string(),
    chapters: z.array(z.string()),
    url: z.string(),
    icon: z.string(),
  }),
});

export const collections = {
  tutorials,
  articles,
  tutorialsBasicData,
};
