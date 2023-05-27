import { gql } from "@apollo/client";

export const getLatestPosts = gql`
  query MyQuery($featuredPostIds: [ID!]) {
    posts(
      where: {
        AND: [
          { NOT: { id_in: $featuredPostIds } }
        ]
      }
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

// import { gql } from "@apollo/client";

// export const getLatestPosts = gql`
//   query MyQuery($featuredPostIds: [ID!]) {
//     postsConnection(
//       where: {
//         AND: [
//           { NOT: { id_in: $featuredPostIds } }
//         ]
//       }
//       first: 6,
//       after: $after
//       orderBy: publishedAt_ASC
//       stage: PUBLISHED
//     ) {
//       pageInfo {
//         pageSize
//         startCursor
//         endCursor
//         hasNextPage
//         hasPreviousPage
//       }
//       edges {
//         node {
//           id
//           slug
//           title
//           publishedAt
//           # content {
//           #   html
//           # }
//           author {
//             name
//             id
//           }
//           tags {
//             name
//           }
//           category {
//             name
//           }
//           coverImage {
//             fileName
//             height
//             url
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;