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
import { BlogCard, MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from '@/components/partials/BlogCard';

const Article = () => {
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
            <div className={`mx-auto max-w-7xl sm:p-6 p-4 mt-8`}>
                <div className='flex flex-row flex-wrap'>
                    <div className='flex-grow-0 basis-auto w-full sm:w-3/4'>
                        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                            {latestPosts?.posts.map((post) => (
                                <BlogCard 
                                    id={post.id}
                                    slug={post.slug}
                                    title={post.title}
                                    publishedAt={post.publishedAt}
                                    content={post.content}
                                    key={post.id}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex-grow-0 basis-auto w-full sm:w-1/4 px-6'> 
                        <div className="mb-4">
                            <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Tags </h5>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
        </Main> 
    );
};

export default Article;
