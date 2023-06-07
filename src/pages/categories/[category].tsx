import { Main } from '@/layouts/Main';
import Blog from '@/components/partials/Blog';
import { SecondaryContent } from '@/components/partials/SecondaryContent';
import { FourthDesign } from '@/components/partials/BlogPost';
import GoToTop from '@/components/partials/GoToTop';
import { MyQueryResult } from '@/props/PostProps';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ApolloError, useQuery } from '@apollo/client';
import { getPost } from '@/services/queries/posts/GetPost';
import ShareButtonGroup, { ShareButtonGroupAlt } from '@/components/partials/Sharer';
import { BlogComponents } from '@/components/BlogComponents';
import { PostCollection } from '@/props/PostConnectionProps';
import { getPosts } from '@/services/queries/posts/GetPostsPaginate';
import { title } from 'process';

const Slug = () => {
    const router = useRouter();
    const {category} = router.query;

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
            category: category,
        },
    });
    
    return(
        <Main>
            <BlogComponents category={category} posts={posts}/>
        </Main>
    )
    
};

export default Slug;
