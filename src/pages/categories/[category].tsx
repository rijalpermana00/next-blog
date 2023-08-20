import { Main } from '@/layouts/Main';
import { Meta } from '@/layouts/components/Meta';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GetStaticCategoriesSlugs, GetStaticCategory } from '@/services/GetStaticSlugs';
import { Category } from '@/props/Categories';
import { GetPosts } from '@/services/GetPosts';
import { BlogComponents } from '@/components/BlogComponents';
interface slugProps{
    category: Category
    loading: boolean
}

const Slug = ({category}:slugProps) => {
    const data = GetPosts({
        category: category?.slug
    })
    
    return(
        <Main>
            <Meta 
                title={category ? 'Category: '+category?.name : 'Categories'} 
                description={'Check awesome '+category?.name+' posts here!!'} 
                canonical={category?.slug?.toString()}/>
            <BlogComponents category={category?.slug} posts={data.postData} loading={data.loadingPost}/>
        </Main>
    )
    
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    
    const {data} = await GetStaticCategory(params?.category);
    
    return {
        props: {
            category: data.category,
        },
    }
};

interface dataProps{
    slug: string
    __typename: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await GetStaticCategoriesSlugs();
    
    return {
        paths: data.categories.map(({slug}:dataProps) => ({
            params: { category: slug },
        })),
        fallback: true,
    }
}

export default Slug;
