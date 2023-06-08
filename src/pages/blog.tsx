import { Main } from '@/layouts/Main';
import { Post, QueryResult } from '@/props/PostProps';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { SecondaryContent } from '@/components/SecondaryContent';
import { getPosts } from '@/services/queries/posts/GetPosts';
import { BlogComponents } from '@/components/BlogComponents';
import { PostCollection, PostsConnection } from '@/props/PostConnectionProps';
import { useState } from 'react';
import { GetPosts } from '@/services/GetPosts';

export default function Index() {
    
    const posts = GetPosts({})
    
    return (
        <Main>
            <BlogComponents title='Blog' posts={posts.postData} loading={posts.loadingPost} />
        </Main>
    );
};