export interface Category {
    id: number;
    name: string;
    slug: string | string[] | undefined;
}

export interface CategoryListProps {
    categories: Category[];
}