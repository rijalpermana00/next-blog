    import { gql } from "@apollo/client";

    export const getLatestPosts = gql`
    query MyQuery($featuredPostIds: [ID!]) {
        postsConnection(
        where: {
            AND: [
            { NOT: { id_in: $featuredPostIds } }
            ]
        }
        first: 6
        orderBy: publishedAt_DESC
        stage: PUBLISHED
        ){
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