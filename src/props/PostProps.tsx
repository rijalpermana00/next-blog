
// export type PostProps = {
//     imageUrl: string;
//     imageAlt: string;
//     author: Author;
//     url?: string | undefined;
//     date: string;
//     tags: Tags[];
//     title: string;
//     excerpt: string;
//     content: string | TrustedHTML;
// };

// export interface Tags {
//     id: number;
//     name: string;
// }

// export interface Category {
//     name: string,
//     posts: PostProps[]
// }

// export interface Author {
//     id: number;
//     name: string;
//     avatar: string;
    
// }

export interface Post {
    id: string;
    slug: string;
    title: string;
    publishedAt: string;
    content: {
      html: string;
    };
    author: {
      name: string;
      id: string;
    };
    tags: string[];
    coverImage: {
      fileName: string;
      height: number;
      url: string;
    };
    excerpt: string;
  }
  
export interface MyQueryResult {
    post: Post;
  }

export interface QueryResult {
      posts: Post[];
}