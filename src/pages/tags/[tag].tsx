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
import { getPosts } from '@/services/queries/posts/GetPosts';
import { GetPosts } from '@/services/GetPosts';

const Slug = () => {
    const router = useRouter();
    const {tag} = router.query;
    
    const posts = GetPosts({
        tag:tag
    })
    
    return(
        <Main title={tag ? 'Tag: '+tag : 'Tags'}>
            <BlogComponents loading={posts.loadingPost} tag={tag} posts={posts.postData}/>
        </Main>
    )
    
};

export default Slug;
