import { gql } from "@apollo/client";

export const getFeaturedPosts = gql`
  query MyQuery {
    posts(
      where: {tags_some: {_search: "featured"}}
      first: 5
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