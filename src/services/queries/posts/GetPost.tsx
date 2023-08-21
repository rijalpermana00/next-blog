import { gql } from "@apollo/client";

export const getPost = gql`
  query MyQuery($slug: String!) {
    post(where: {slug: $slug}) {
      id
      author {
        name
        id
        picture {
          id
          url
          fileName
        }
      }
      content {
        html
      }
      coverImage {
        fileName
        url
        height
        width
      }
      slug
      title
      excerpt
      publishedAt
      tags {
        name
        slug
      }
      category{
        name
        slug
      }
    }
  }
`;  