import { Main } from '@/layouts/Main';
import { useRouter } from 'next/router';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import { useEffect } from 'react';

const Slug = () => {
    const router = useRouter();
    const {tag} = router.query;
    
    const posts = GetPosts({
        tag:tag
    })
    
    let cannon;
        
    useEffect(() => {
        cannon = window.location.href;
    },[]);
    
    return(
        <Main>
            <Meta title={tag ? 'Tag: '+tag : 'Tags'} description={'Check this out'} canonical={cannon}/>
            <BlogComponents loading={posts.loadingPost} tag={tag} posts={posts.postData}/>
        </Main>
    )
    
};

export default Slug;
