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
