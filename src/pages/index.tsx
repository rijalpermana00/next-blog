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
import { getTags } from '@/services/queries/GetTags';
import { Categories } from '@/services/Categories';
import CategoryCard from '@/components/partials/TagCard';
import { Carousel } from '@/components/partials/Carousel';
import { ScrollableCard } from '@/components/partials/ScrollableCard';
import { Splides } from '@/components/partials/Splide';
import { TagsConnectionData } from "@/props/TagProps";


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
    
    const featuredPostIds = featuredPosts?.posts?.map(post => post.id) || [];
    
    const { 
        loading:loadingLatestPost, 
        error:errorLatestPost, 
        data:latestPosts 
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:QueryResult
    } = useQuery(getLatestPosts, {
        variables: { featuredPostIds: featuredPostIds },
    });
    
    const categories = Categories();
    
    return (
        <Main>
            {/* <div className={`mx-auto max-w-7xl sm:p-6 p-4`}> */}
                <Header/>
                <div className='max-w-6xl sm:p-6 p-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 flex-row flex-wrap mx-auto justify-center'>
                    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                        <div className="relative sm:w-md sm:h-md w-md h-md">
                            {featuredPosts 
                                ? (
                                    featuredPosts?.posts.slice(0,1).map((post) => (
                                        <MainBlogCard 
                                            coverImage={post?.coverImage}
                                            slug={post.slug}
                                            publishedAt={post.publishedAt}
                                            // tags={card.imageUrl}
                                            author={post?.author}
                                            title={post.title}
                                            excerpt={post.excerpt} 
                                            content={post.content}
                                            id={post.id}
                                            key={post.id}
                                        />
                                    ))
                                ) : (
                                    
                                    <Skeleton className="w-full h-[32rem]"/>
                                )
                            }
                        </div>
                        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center">
                            {featuredPosts
                                ? (
                                    featuredPosts?.posts.slice(1,5).map((post) => (
                                        (post?.coverImage?.url 
                                            ?
                                                <SubMainBlogCard 
                                                    coverImage={post?.coverImage}
                                                    slug={post.slug}
                                                    publishedAt={post.publishedAt}
                                                    // tags={card.imageUrl}
                                                    title={post.title}
                                                    author={post?.author}
                                                    excerpt={post.excerpt} 
                                                    content={post.content}
                                                    id={post.id}
                                                    bgColor='bg-orange-300'
                                                    // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                                    key={post.id}
                                                />
                                            : 
                                                <SubMainImagelessBlogCard 
                                                    coverImage={post?.coverImage}
                                                    slug={post.slug}
                                                    publishedAt={post.publishedAt}
                                                    // tags={card.imageUrl}
                                                    title={post.title}
                                                    author={post?.author}
                                                    excerpt={post.excerpt} 
                                                    content={post.content}
                                                    id={post.id}
                                                    bgColor='bg-orange-300'
                                                    // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                                    key={post.id}
                                                />
                                        )
                                    ))
                                ) : (
                                    <>
                                        <Skeleton className="w-full sm:h-[23.5rem] md:h-[23.5rem] lg:h-full"/>
                                        <Skeleton className="w-full sm:h-[23.5rem] md:h-[23.5rem] lg:h-full"/>
                                        <Skeleton className="w-full sm:h-[23.5rem] md:h-[23.5rem] lg:h-full"/>
                                        <Skeleton className="w-full sm:h-[23.5rem] md:h-[23.5rem] lg:h-full"/>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
                <hr/>
                {/* <Carousel/> */}
                {/* <ScrollableCard/> */}
                <Splides data={categories}/>
                <hr/>
                <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
                    <div className='flex flex-row flex-wrap'>
                        <div className='flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5'>
                            <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Latest Posts </h5>
                            <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                                {latestPosts?.posts.map((post) => (
                                    (post?.coverImage?.url 
                                        ?
                                            <SubMainBlogCard 
                                                coverImage={post?.coverImage}
                                                slug={post.slug}
                                                publishedAt={post.publishedAt}
                                                // tags={card.imageUrl}
                                                title={post.title}
                                                author={post?.author}
                                                excerpt={post.excerpt} 
                                                content={post.content}
                                                id={post.id}
                                                bgColor='bg-orange-300'
                                                // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                                key={post.id}
                                            />
                                        : 
                                            <SubMainImagelessBlogCard 
                                                coverImage={post?.coverImage}
                                                slug={post.slug}
                                                publishedAt={post.publishedAt}
                                                // tags={card.imageUrl}
                                                title={post.title}
                                                author={post?.author}
                                                excerpt={post.excerpt} 
                                                content={post.content}
                                                id={post.id}
                                                bgColor='bg-red-300'
                                                // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                                key={post.id}
                                            />
                                    )
                                ))}
                            </div>
                            <div className='flex flex-col items-center pt-10 pb-20 md:pb-0'>
                                <button className='inline-flex items-center justify-center relative bg-transparent font-bold px-2 py-3 cursor-pointer border-gray-700 border rounded-lg text-sm'>See More</button>
                            </div>
                        </div>
                        <div className='flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5'> 
                            <div className="mb-4">
                                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Tags </h5>
                                <ul>
                                    {categories.map((cat,index) => (
                                        <CategoryCard 
                                            title={cat.categoryName} 
                                            total={cat.count} 
                                            color={cat.color}
                                            key={index}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
