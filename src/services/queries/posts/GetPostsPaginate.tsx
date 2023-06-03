import { gql } from "@apollo/client";

export const getPosts = gql`
    query MyQuery($after: String,$category: String) {
        postsConnection(
            first: 6, 
            orderBy: publishedAt_DESC, 
            after: $after
            where: {category: {_search: $category}}
        ) {
            pageInfo {
            pageSize
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
            }
            edges {
                node {
                    id
                    slug
                    title
                    publishedAt
                    author {
                        name
                        id
                    }
                    tags {
                        name
                    }
                    category {
                        name
                        slug
                    }
                    coverImage {
                        fileName
                        height
                        url
                    }
                    excerpt
                }
            }
        }
    }

`;