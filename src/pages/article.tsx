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
                <div className="block md:flex md:space-x-2 px-2 lg:p-0">
                    <div className='mb-4 md:mb-0 w-full md:w-3/4 relative rounded inline-block'>
                        <div className="relative sm:grid w-full">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 justify-center">
                                {latestPosts?.posts.map((post) => (
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
                                        key={post.id}
                                        bgColor='bg-orange-300'
                                        dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='mb-4 md:mb-0 w-full md:w-1/3 relative rounded inline-block'>
                        <div className="relative">
                            <div className="mb-4">
                                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                                <ul>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                                    <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                                    Nutrition
                                    <span className="text-gray-500 ml-auto">23 articles</span>
                                    <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                                    Food & Diet
                                    <span className="text-gray-500 ml-auto">18 articles</span>
                                    <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                                    Workouts
                                    <span className="text-gray-500 ml-auto">34 articles</span>
                                    <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </a>
                                </li>
                                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                                    Immunity
                                    <span className="text-gray-500 ml-auto">9 articles</span>
                                    <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </Main> 
    );
};

export default Article;
