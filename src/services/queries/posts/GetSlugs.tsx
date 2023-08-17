import { gql } from "@apollo/client";

export const getSlugs = gql`
    query MyQuery{
        posts {
            slug
        }
    }
`;