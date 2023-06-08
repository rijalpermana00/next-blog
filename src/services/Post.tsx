import { MyQueryResult, QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { getLatestPosts } from "./queries/posts/GetLatestPosts";
import { getPost } from "./queries/posts/GetPost";

export function GetPost(slug:string | string[] | undefined){
    const { 
        loading:loadingPost, 
        error:errorPost, 
        data:postData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:MyQueryResult
    } = useQuery(getPost, {
        variables: { slug: slug},
    });
    
    return {
        postData,
        errorPost,
        loadingPost
    }
}
