import { Article } from "../models/article";

export type AtomArticle = {
  id: string;
  published: [string, string];
  updated: [string, string];
  link: {
    href: string;
    rel: string;
    type: string;
  };
  url: string;
  title: string;
  content: {
    type: string;
    content?: string;
    summary?: string;
  };
  author: {
    name: string;
  };
};
