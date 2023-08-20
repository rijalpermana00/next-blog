import { QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { getLatestPosts } from "./queries/posts/GetLatestPosts";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { getPosts } from "./queries/posts/GetPosts";

interface postProps{
    total?: number,
    category?: string | string[] | undefined,
    tag?: string | string[] | undefined,
    id?:string[],
    after?:string,
    keyword?:string | string[] | undefined,
    
}

export function GetPosts(props:postProps){
    
    const { 
        loading:loadingPost, 
        error:errorPost, 
        data:postData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getPosts, {
        variables: { 
            total: props.total ?? 4,
            category: props.category ?? "",
            featuredPostIds: props.id ?? [],
            keyword: props.keyword ?? "",
            tag: props.tag ?? "",
            after: props.after ?? null,
        },
    });
    
    return {
        loadingPost,
        errorPost,
        postData
    }
}