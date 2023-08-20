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

export const getTag = gql`
    query MyQuery($slug: String!) {
        tag(where: {slug: $slug}) {
            id
            name
            slug
        }
    }
`;