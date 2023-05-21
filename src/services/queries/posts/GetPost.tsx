import { gql } from "@apollo/client";

export const getPost = gql`
  query MyQuery($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
        id
      }
      content {
        html
      }
      coverImage {
        fileName
        url
      }
      slug
      title
      publishedAt
      tags {
        name
      }
    }
  }
`;  