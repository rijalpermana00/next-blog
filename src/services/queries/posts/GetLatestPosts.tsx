    import { gql } from "@apollo/client";

    export const getLatestPosts = gql`
    query MyQuery($total:Int = 6, $featuredPostIds: [ID!]) {
        postsConnection(
        where: {
            AND: [
            { NOT: { id_in: $featuredPostIds } }
            ]
        }
        first: $total
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
                        slug
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