import { gql } from "@apollo/client";

export const getPosts = gql`
    query MyQuery(
        $total:Int = 6,
        $after: String = null,
        $category: String = "",
        $keyword: String = "",
        $tag: String = "",
        $featuredPostIds: [ID!]
    ) {
        postsConnection(
            first: $total
            orderBy: publishedAt_DESC, 
            after: $after
            where: {
                _search: $keyword,
                category: {
                    _search: $category
                },
                tags_some: {
                    _search: $tag
                },
                AND: [
                    { NOT: { id_in: $featuredPostIds } }
                ]
            }
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