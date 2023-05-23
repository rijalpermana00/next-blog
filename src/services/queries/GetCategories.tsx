import { gql } from "@apollo/client";

export const getCategories = gql`
    query MyQuery {
        categoriesConnection(stage: PUBLISHED) {
            edges {
                node {
                    name
                    color
                    posts {
                        id
                    }
                    image{
                        fileName
                        url
                    }
                    slug
                }
            }
        }
    }

`;