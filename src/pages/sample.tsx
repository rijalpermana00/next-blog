import { Main } from '@/layouts/Main';
import { FourthDesign } from '@/components/partials/BlogPost';
import { MainContent } from '@/components/partials/MainContent';
import { MainSecondaryContent, SecondaryContent } from '@/components/partials/SecondaryContent';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';
import { useEffect, useState } from 'react';
import { Post, QueryResult } from '@/props/PostProps';
import Skeleton from '@/components/partials/Skeleton';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { getFeaturedPosts } from '@/services/queries/posts/GetFeaturedPosts';
import { getLatestPosts } from '@/services/queries/posts/GetLatestPosts';
import CardList, { cards } from '@/components/CardList';
import Card from '@/components/partials/Card';
import { MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from '@/components/partials/BlogCard';

const Index = () => {
    const { 
        loading:loadingFeaturedPost, 
        error:errorFeaturedPost, 
        data:featuredPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:QueryResult
    } = useQuery(getFeaturedPosts);
    
    const featuredPostId = featuredPosts?.posts[0]?.id;
    
    const { 
        loading:loadingLatestPost, 
        error:errorLatestPost, 
        data:latestPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:QueryResult
    } = useQuery(getLatestPosts, {
        variables: { featuredPostId: [featuredPostId] },
    });
    
    return (
        <Main>
            <div className={`mx-auto max-w-7xl sm:p-6 p-4`}>
                <div className='flex flex-row flex-wrap mx-auto justify-center'>
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                        <div className="relative sm:w-[560px] sm:h-[560px] w-[382px] h-[382px]">
                            {featuredPosts?.posts.slice(0,1).map((post) => (
                                <MainBlogCard 
                                    coverImage={post?.coverImage}
                                    slug={post.slug}
                                    publishedAt="18 May 2023"
                                    // tags={card.imageUrl}
                                    author={post?.author}
                                    title={post.title}
                                    excerpt={post.excerpt} 
                                    content={post.content}
                                    id={post.id}
                                    key={post.id}
                                />
                            ))}
                        </div>
                        <div className="relative sm:grid max-w-xl">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 justify-center">
                                {latestPosts?.posts.map((post) => (
                                    (post?.coverImage?.url 
                                        ?
                                            <SubMainBlogCard 
                                                coverImage={post?.coverImage}
                                                slug={post.slug}
                                                publishedAt="18 May 2023"
                                                // tags={card.imageUrl}
                                                title={post.title}
                                                author={post?.author}
                                                excerpt={post.excerpt} 
                                                content={post.content}
                                                id={post.id}
                                                bgColor='bg-orange-300'
                                                dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            />
                                        : 
                                            <SubMainImagelessBlogCard 
                                                coverImage={post?.coverImage}
                                                slug={post.slug}
                                                publishedAt="18 May 2023"
                                                // tags={card.imageUrl}
                                                title={post.title}
                                                author={post?.author}
                                                excerpt={post.excerpt} 
                                                content={post.content}
                                                id={post.id}
                                                bgColor='bg-orange-300'
                                                dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            />
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
