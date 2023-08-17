import { Main } from '@/layouts/Main';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import AppConfig from '@/utils/AppConfig';
import { Meta } from '@/layouts/components/Meta';
import { useEffect } from 'react';

export default function Index(props:MetaProps) {
    
    const posts = GetPosts({})
    
    let cannon;
        
    useEffect(() => {
        cannon = window.location.href;
    },[]);
    
    return (
        <Main>
            <Meta title={AppConfig.title} description={AppConfig.description} canonical={cannon}/>
            <BlogComponents title='Blog' posts={posts.postData} loading={posts.loadingPost} />
        </Main>
    );
};