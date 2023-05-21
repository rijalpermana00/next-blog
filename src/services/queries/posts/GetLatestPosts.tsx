import { gql } from "@apollo/client";

export const getLatestPosts = gql`
  query MyQuery($featuredPostIds: [ID!]) {
    posts(
      where: {
        AND: [
          { NOT: { id_in: $featuredPostIds } }
        ]
      }
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