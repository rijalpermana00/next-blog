import { gql } from "@apollo/client";

export const getFeaturedPosts = gql`
query MyQuery {
    postsConnection(
        where: {tags_some: {_search: "featured"}}
        first: 5
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