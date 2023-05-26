import { gql } from "@apollo/client";

export const getPosts = gql`
  query MyQuery {
    posts(
      first: 6
      orderBy: publishedAt_DESC
      stage: PUBLISHED
    ) {
      id
      slug
      title
      publishedAt
      # content {
      #   html
      # }
      author {
        name
        id
      }
      tags {
        name
      }
      category {
        name
      }
      coverImage {
        fileName
        height
        url
      }
      excerpt
    }
  }
`;