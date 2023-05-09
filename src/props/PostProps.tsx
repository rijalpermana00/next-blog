
export type PostProps = {
    imageUrl: string;
    imageAlt: string;
    author: Author;
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

export interface Author {
    id: number;
    name: string;
    avatar: string;
    
}