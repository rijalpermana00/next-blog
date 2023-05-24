import { gql } from "@apollo/client";

export const getTags = gql`
    query MyQuery {
        tags(stage: PUBLISHED) {
            id
            name
            slug
        }
    }
`;