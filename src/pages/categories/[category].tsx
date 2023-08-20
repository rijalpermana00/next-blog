import { Main } from '@/layouts/Main';
import { useRouter } from 'next/router';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import AppConfig from '@/utils/AppConfig';
import { useEffect } from 'react';

const Slug = () => {
    const router = useRouter();
    const {category} = router.query;

    const data = GetPosts({
        category: category
    })
    
    return(
        <Main>
            <Meta title={category ? 'Category: '+category : 'Categories'} description={'Check this out'} canonical={category?.toString()}/>
            <BlogComponents category={category} posts={data.postData} loading={data.loadingPost}/>
        </Main>
    )
    
};

export default Slug;
