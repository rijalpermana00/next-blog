import { QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { getLatestPosts } from "./queries/posts/GetLatestPosts";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { getPosts } from "./queries/posts/GetPostsPaginate";

interface postProps{
    total?: number,
    category?: string,
    tag?: string,
    id?:string[],
    after?:string,
    keyword?:string | string[] | undefined,
    
}

export function GetPosts(props:postProps){
    
    const { 
        loading:loadingLatestPost, 
        error:errorLatestPost, 
        data:postData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getPosts, {
        variables: { 
            total: props. total ?? 4,
            category: props.category ?? "",
            featuredPostIds: props.id ?? [],
            keyword: props.keyword ?? "",
            tag: props.tag ?? "",
            after: props.after ?? null
        },
    });
    
    return postData
}