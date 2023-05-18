import { Main } from '@/layouts/Main';
import blog from '@/config/blog.json';
import Blog from '@/components/partials/Blog';
import { SecondaryContent } from '@/components/partials/SecondaryContent';
import { FourthDesign } from '@/components/partials/BlogPost';
import GoToTop from '@/components/partials/GoToTop';
import { MyQueryResult } from '@/props/PostProps';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ApolloError, useQuery } from '@apollo/client';
import { getPost } from '@/services/queries/posts/GetPost';
import ShareButtonGroup, { ShareButtonGroupAlt } from '@/components/partials/Sharer';

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const { 
        loading:loadingPost, 
        error:errorPost, 
        data:postData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:MyQueryResult
    } = useQuery(getPost, {
        variables: { slug: slug },
    });
    
    const post = postData?.post;
    
    return (
        <Main>
            <div className={`py-10 sm:py-16 px-4 sm:px-32 sm:max-w-5xl sm:mx-auto`}>
                {post && (
                    <Blog
                        author={post.author}
                        title={post.title}
                        tags={post.tags}
                        slug={post.slug}
                        publishedAt={post.publishedAt}
                        content={post.content}
                        excerpt={post.excerpt}
                        coverImage={post.coverImage}
                        id={post.id}
                    />
                )}
            </div>
            {/* <SecondaryContent title='Other Posts' order='text-center' maxWidth='max-w-7xl'>
                {post.posts.slice(1).map((post, index) => (
                    <FourthDesign
                        author={post.author}
                        title={post.title}
                        coverImage={post.coverImage}
                        tags={post.tags}
                        publishedAt={post.publishedAt}
                        excerpt={post.excerpt}
                        content={post.content}
                        slug={post.slug}
                        id={post.id}
                        key={index}
                />
                ))}
            </SecondaryContent> */}
            <GoToTop/>
        </Main>
    );
};

export default Slug;
