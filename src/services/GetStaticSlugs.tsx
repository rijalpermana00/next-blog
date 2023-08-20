import { getCategoriesSlugs, getPostsSlugs, getTagsSlugs } from "./queries/posts/GetSlugs";
import { getClient } from "@/apollo/Config";
import { getPost } from "./queries/posts/GetPost";
import { getCategory } from "./queries/GetCategories";
import { getTag } from "./queries/GetTags";

export async function GetStaticPostsSlugs(){
    const client = getClient();
    const { data } = await client.query({
        query: getPostsSlugs,
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

export async function GetStaticCategoriesSlugs(){
    const client = getClient();
    const { data } = await client.query({
        query: getCategoriesSlugs,
    });
    
    return data;
}

export async function GetStaticCategory(slug:string | string[] | undefined){
    const client = getClient();
    const { data,loading } = await client.query({
        query: getCategory,
        variables: { slug: slug},
    });
    return {
        data,
        loading
    };
}

export async function GetStaticTagsSlugs(){
    const client = getClient();
    const { data } = await client.query({
        query: getTagsSlugs,
    });
    
    return data;
}

export async function GetStaticTag(slug:string | string[] | undefined){
    const client = getClient();
    const { data,loading } = await client.query({
        query: getTag,
        variables: { slug: slug},
    });
    return {
        data,
        loading
    };
}