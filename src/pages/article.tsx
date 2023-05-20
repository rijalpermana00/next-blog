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
            <div className={`mx-auto max-w-7xl sm:p-6 p-4`}>
                <div className='flex flex-row flex-wrap'>
                    <div className='flex-grow-0 basis-auto w-full sm:w-3/4 p-6'>
                        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 bg-zinc-50 p-1">
                            <div className='flex flex-col'>
                                <span className='relative w-full leading-4 overflow-hidden rounded-xl'>
                                    <span className='top-0 left-0 w-full h-max absolute bg-cover'>
                                        <img className='w-[357px] h-[357px]'>
                                        </img>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-grow-0 basis-auto w-full sm:w-1/4 p-6'> 
                        <p className="pb-6 border-gray-400 bg-gray-200">Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
                            resolution son indulgence.</p>
                    </div>
                </div>
            </div>  
        </Main> 
    );
};

export default Article;
