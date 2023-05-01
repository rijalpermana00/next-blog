export type PostProps = {
    imageUrl: string;
    imageAlt: string;
    authorName: string;
    date: string;
    category: Category[];
    title: string;
    excerpt: string;
};

export interface Category {
    id: number;
    name: string;
}