import { getClient } from "@/apollo/Config";
import { MainContent } from "@/components/partials/MainContent";
import { gql } from "@apollo/client";

export async function getPost(slug:string | string[] | undefined) {
  
  const query = gql`
    query MyQuery{
      post(where: {slug: "my-first-post"}) {
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
        tags
      }
    }
  `;  
  
  const client = getClient();
  const result = await client.query({ query });
  if (!result.data.posts) {
    return false;
  }
  return result.data.posts;
}