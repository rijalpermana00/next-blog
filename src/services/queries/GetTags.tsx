import { gql } from "@apollo/client";

export const getTags = gql`
    query MyQuery {
        tagsConnection(stage: PUBLISHED) {
            edges{
                node{
                    name

                }
            }
        }
    }

`;