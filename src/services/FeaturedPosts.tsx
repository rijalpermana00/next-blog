'use client'
import { QueryResult } from "@/props/PostProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getFeaturedPosts } from "./queries/posts/GetFeaturedPosts";
import { PostCollection } from "@/props/PostConnectionProps";

export function FeaturedPosts(){
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:featuredPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getFeaturedPosts);
    
    if(featuredPosts){
        return featuredPosts
    }
    
    return null
}
