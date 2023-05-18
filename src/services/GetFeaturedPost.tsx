import { getClient } from "@/apollo/Config";
import { MainContent } from "@/components/partials/MainContent";
import { gql } from "@apollo/client";
    
const query = gql`query MyQuery {
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
}`;

export async function getFeaturedPost() {
  const client = getClient();
  const result = await client.query({ query });
  if (!result.data.posts) {
    return false;
  }
  return result.data.posts[0];
}