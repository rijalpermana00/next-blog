import { Main } from '@/layouts/Main';
import { Post, QueryResult } from '@/props/PostProps';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { SecondaryContent } from '@/components/SecondaryContent';
import { getPosts } from '@/services/queries/posts/GetPostsPaginate';
import { BlogComponents } from '@/components/BlogComponents';
import { PostCollection, PostsConnection } from '@/props/PostConnectionProps';
import { useState } from 'react';

export default function Index() {
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:posts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getPosts, {
        variables: { 
            after: null,
            category: ""
        },
    });
    
    return (
        <Main>
            <BlogComponents category='' posts={posts}/>
        </Main>
    );
};