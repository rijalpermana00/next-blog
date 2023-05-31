import { gql } from "@apollo/client";

export const getPosts = gql`
    query MyQuery($after: String) {
        postsConnection(first: 6, orderBy: publishedAt_DESC, after: $after) {
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