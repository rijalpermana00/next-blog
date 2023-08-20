import { Main } from '@/layouts/Main';
import { useRouter } from 'next/router';
import { BlogComponents } from '@/components/BlogComponents';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import { useEffect } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { GetStaticTag, GetStaticTagsSlugs } from '@/services/GetStaticSlugs';
import { TagData } from '@/props/TagsProps';

interface slugProps{
    tag: TagData
    loading: boolean
}

const Slug = ({tag}:slugProps) => {
    const posts = GetPosts({
        tag:tag.slug
    })
    
    return(
        <Main>
            <Meta 
                title={tag ? 'Tag: '+tag.name : 'Tags'} 
                description={'Check awesome '+tag.name+' posts here!!'} 
                canonical={tag.slug?.toString()}
            />
            <BlogComponents loading={posts.loadingPost} tag={tag.name} posts={posts.postData}/>
        </Main>
    )
    
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    
    const {data} = await GetStaticTag(params?.tag);
    
    return {
        props: {
            tag: data.tag,
        },
    }
};

interface dataProps{
    slug: string
    __typename: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await GetStaticTagsSlugs();
    
    return {
        paths: data.tags.map(({slug}:dataProps) => ({
            params: { tag: slug },
        })),
        fallback: true,
    }
}

export default Slug;
