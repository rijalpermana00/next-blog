
export type PostProps = {
    imageUrl: string;
    imageAlt: string;
    authorName: string;
    date: string;
    tags: Tags[];
    title: string;
    excerpt: string;
};

export interface Tags {
    id: number;
    name: string;
}

export interface Category {
    name: string,
    posts: PostProps[]
}