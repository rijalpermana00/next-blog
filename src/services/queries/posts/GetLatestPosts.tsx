import { gql } from "@apollo/client";

// export const getLatestPosts = gql`
//   query MyQuery {
//     posts(last: 7) {
//       id
//       slug
//       title
//       publishedAt
//       content {
//         html
//       }
//       author {
//         name
//         id
//       }
//       tags
//       coverImage {
//         fileName
//         height
//         url
//       }
//       excerpt
//     }
//   }
// `;

export const getLatestPosts = gql`
  query MyQuery($featuredPostId: [ID!]) {
    posts(
      where: {
        AND: [
          { NOT: { id_in: $featuredPostId } }
        ]
      }
    ) {
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