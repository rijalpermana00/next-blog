import { gql } from "@apollo/client";

export const getTags = gql`
    query MyQuery {
        tags {
            name
        }
    }
`;