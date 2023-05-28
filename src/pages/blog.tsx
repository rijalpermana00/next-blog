import { Main } from '@/layouts/Main';
import { Post, QueryResult } from '@/props/PostProps';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { SecondaryContent } from '@/components/SecondaryContent';
import { getPosts } from '@/services/queries/posts/GetPostsPaginate';
import { BlogComponents } from '@/components/partials/BlogComponents';
import { PostsConnection, zxc } from '@/props/PostConnectionProps';
import { useState } from 'react';

const Index = () => {
    const [isDarkMode, setIsDarkMode] = useState();
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:posts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:zxc
    } = useQuery(getPosts, {
        variables: { after: null },
    });
    
    return (
        <Main>
            {posts
                ? 
                <BlogComponents posts={posts.postsConnection}/>
                :
                <></>
            }
        </Main>
    );
};

export default Index;
