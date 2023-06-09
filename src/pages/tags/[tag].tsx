import { Main } from '@/layouts/Main';
import { useRouter } from 'next/router';
import { BlogComponents } from '@/components/BlogComponents';
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
