export interface CategoryData {
    name: string;
    color: string;
    posts: { id: string }[];
    image: string;
    slug: string;
}
  
export interface CategoriesConnectionData {
    edges: { 
        node: CategoryData 
    }[];
}

export interface CategoryInfo {
    categoryName: string;
    color: string;
    count: number;
    image: string;
    slug: string;
}

export interface CategoryInfos{
    data: CategoryInfo[] | []
    active: string | string[] | undefined;
}
