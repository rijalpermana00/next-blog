import { TagsConnectionData } from "@/props/TagsProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getTags } from "./queries/GetTags";

export function TagList(){
    const { 
        loading:loadingTags, 
        error:errorTags, 
        data:tagsData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:TagsConnectionData
    } = useQuery(getTags);
    
    return tagsData
}