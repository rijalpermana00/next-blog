import { Main } from '@/layouts/Main';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import AppConfig from '@/utils/AppConfig';
import { Meta } from '@/layouts/components/Meta';
import { useEffect } from 'react';

export default function Index(props:MetaProps) {
    
    const posts = GetPosts({})
    
    return (
        <Main>
            <Meta 
                title={'Blog by '+ AppConfig.owner.name} 
                description={'Read many of awesome blog posts here!'} canonical={'/blog'}
            />
            <BlogComponents title='Blog' posts={posts.postData} loading={posts.loadingPost} />
        </Main>
    );
};