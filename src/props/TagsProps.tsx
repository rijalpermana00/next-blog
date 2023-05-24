export interface TagData {
    id: string;
    name: string;
    slug: string;
}
  
export interface TagsConnectionData {
    tags: TagData[] | [];
}