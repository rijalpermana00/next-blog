import { Main } from '@/layouts/Main';
import { Post, QueryResult } from '@/props/PostProps';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { SecondaryContent } from '@/components/SecondaryContent';
import { getPosts } from '@/services/queries/posts/GetPostsPaginate';
import { BlogComponents } from '@/components/partials/BlogComponents';
import { PostCollection } from '@/props/PostConnectionProps';
import { useState } from 'react';

const Blog = () => {
    const [isDarkMode, setIsDarkMode] = useState();
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:posts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:PostCollection
    } = useQuery(getPosts, {
        variables: { after: null },
    });
    
    return (
        <Main>
            <BlogComponents posts={posts?.postsConnection}/>
        </Main>
    );
};

export default Blog;
