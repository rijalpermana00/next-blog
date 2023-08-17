export interface PageInfo {
    pageSize: number;
    startCursor: string;
    endCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    __typename: string;
}

export interface Author {
    name: string;
    id: string;
    __typename: string;
}

export interface Tag {
    name: string;
    slug: string;
    __typename: string;
}

export interface Category {
    name: string;
    slug: string;
    __typename: string;
}

export interface CoverImage {
    fileName?: string;
    height?: number;
    url?: string;
    __typename?: string;
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    publishedAt: string;
    author: Author;
    tags: Tag[];
    category: Category;
    coverImage: CoverImage | null;
    excerpt: string;
    __typename?: string;
    bgColor?: 'bg-red-300' | 'bg-blue-300' | 'bg-green-300' | 'bg-white' | 'bg-black' | 'bg-yellow-300' | 'bg-gray-300' | 'bg-orange-300 ' | 'bg-orange-300 dark:bg-gray-500' | 'bg-gray-300 dark:bg-gray-500' | undefined
    dimension?: string;
}

export interface PostEdge {
    node: Post;
    __typename: string;
}

export interface PostsConnection {
    pageInfo: PageInfo;
    edges: PostEdge[];
    __typename: string;
}

export interface PostCollection {
    postsConnection: PostsConnection;
}

export interface PostsData {
    data: {
        postsConnection: PostsConnection;
    };
}

export interface Slug {
    slug: string
}

export interface SlugsData {
    data: {
        posts: Slug[];
    };
}