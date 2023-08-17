import { ApolloError, useQuery } from "@apollo/client";
import { SlugsData } from "@/props/PostConnectionProps";
import { getSlugs } from "./queries/posts/GetSlugs";

export function GetSlugs(){
    
    const { 
        loading:loadingSlug, 
        error:errorSlug, 
        data:slugData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:SlugsData
    } = useQuery(getSlugs);
    
    return {
        loadingSlug,
        errorSlug,
        slugData
    }
}