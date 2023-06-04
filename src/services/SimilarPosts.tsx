import { QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { getLatestPosts } from "./queries/posts/GetLatestPosts";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { getPosts } from "./queries/posts/GetPostsPaginate";

interface props{
    category: string | undefined;
    id: string | string[]
}

export function SimilarPosts(props:props){
    const { 
        loading:loadingLatestPost, 
        error:errorLatestPost, 
        data:latestPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getPosts, {
        variables: { 
            total: 4,
            category: props.category,
            featuredPostIds: props.id
        },
    });
   
    if(latestPosts){
        return latestPosts
    }
    return null
}
