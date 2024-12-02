import { Tag } from "@/app/api/types";

export interface TagWithCount extends Tag {
  count: number; 
  
}


export interface TagsListProps {
  tags: TagWithCount[];  
}
