import { Main } from '@/layouts/Main';
import { useRouter } from 'next/router';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';

const Slug = () => {
    const router = useRouter();
    const {category} = router.query;

    const data = GetPosts({
        category: category
    })
    
    return(
        <Main title={category ? 'Category: '+category : 'Categories'}>
            <BlogComponents category={category} posts={data.postData} loading={data.loadingPost}/>
        </Main>
    )
    
};

export default Slug;
