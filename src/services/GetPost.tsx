import { getClient } from "@/apollo/Config";
import { MainContent } from "@/components/partials/MainContent";
import { gql } from "@apollo/client";
    
const query = gql`query MyQuery {
    posts(where: { slug: $slug }, last: 7) {
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

const variables = {
    slug: 'my-first-post'
};

export async function getPost() {
  const client = getClient();
  const result = await client.query({ query,variables });
  if (!result.data.posts) {
    return false;
  }
  return result.data.posts;
}