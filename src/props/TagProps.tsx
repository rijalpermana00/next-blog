export interface TagData {
    name: string;
    slug?: string;
}
  
export interface TagsConnectionData {
    edges: { 
        node: TagData 
    }[];
}

export interface TagInfo {
    name: string;
    slug?: string;
}

export interface TagInfos{
    data: TagInfo[] | []
}
