import { Main } from '@/layouts/Main';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import AppConfig from '@/utils/AppConfig';
import { Meta } from '@/layouts/components/Meta';

export default function Index(props:MetaProps) {
    
    const posts = GetPosts({})
    
    return (
        <Main>
            <Meta title={AppConfig.title} description={AppConfig.description}/>
            <BlogComponents title='Blog' posts={posts.postData} loading={posts.loadingPost} />
        </Main>
    );
};