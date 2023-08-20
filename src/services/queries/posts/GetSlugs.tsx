import { gql } from "@apollo/client";

export const getPostsSlugs = gql`
    query MyQuery{
        posts {
            slug
        }
    }
`;

export const getCategoriesSlugs = gql`
    query MyQuery{
        categories {
            slug
        }
    }
`;

export const getTagsSlugs = gql`
    query MyQuery{
        tags {
            slug
        }
    }
`;

