import { gql } from "@apollo/client";

export const getFeaturedPosts = gql`
  query MyQuery {
    posts(where: {tags_contains_some: "Featured"}, last: 1) {
      id
      slug
      title
      publishedAt
      content {
        html
      }
      author {
        name
        id
      }
      tags
      coverImage {
        fileName
        height
        url
      }
      excerpt
    }
  }
`;