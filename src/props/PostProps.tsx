
export type PostProps = {
    imageUrl: string;
    imageAlt: string;
    authorName: string;
    url?: string | undefined;
    date: string;
    tags: Tags[];
    title: string;
    excerpt: string;
    content: string | TrustedHTML;
};

export interface Tags {
    id: number;
    name: string;
}

export interface Category {
    name: string,
    posts: PostProps[]
}