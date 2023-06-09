import { Main } from '@/layouts/Main';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';

export default function Index() {
    
    const posts = GetPosts({})
    
    return (
        <Main>
            <BlogComponents title='Blog' posts={posts.postData} loading={posts.loadingPost} />
        </Main>
    );
};