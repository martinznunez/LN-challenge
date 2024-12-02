import { Tag,Article } from "@/app/api/types";

export type Tags = Tag

export type Articles = Article

export interface ArticlesData {
    id: string;
    title: string;
    date: string; 
    imageUrl: string; 
    link: string; 
    tags: Tags[]; 
  }
  
