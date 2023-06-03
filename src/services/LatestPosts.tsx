import { QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { getLatestPosts } from "./queries/posts/GetLatestPosts";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { getPosts } from "./queries/posts/GetPostsPaginate";

export function LatestPosts(featuredPostIds:string[]){
    const { 
        loading:loadingLatestPost, 
        error:errorLatestPost, 
        data:latestPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getLatestPosts, {
        variables: { featuredPostIds: featuredPostIds },
    });
   
    if(latestPosts){
        return latestPosts
    }
    return null
}
