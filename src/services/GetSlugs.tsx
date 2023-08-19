import { ApolloError, useQuery } from "@apollo/client";
import { SlugsData } from "@/props/PostConnectionProps";
import { getSlugs } from "./queries/posts/GetSlugs";
import { getClient } from "@/apollo/Config";
import { getPost } from "./queries/posts/GetPost";

export async function GetStaticSlugs(){
    const client = getClient();
    const { data } = await client.query({
        query: getSlugs,
    });
    
    return data;
}

export async function GetStaticPost(slug:string | string[] | undefined){
    const client = getClient();
    const { data,loading } = await client.query({
        query: getPost,
        variables: { slug: slug},
    });
    return {
        data,
        loading
    };
}