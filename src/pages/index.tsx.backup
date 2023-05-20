import { Main } from '@/layouts/Main';
import { FourthDesign } from '@/components/partials/BlogPost';
import post from '@/config/post.json'
import favorites from '@/config/favorites.json'
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
    
    // const { 
    //     loading:loadingLatestPost, 
    //     error:errorLatestPost, 
    //     data:latestPosts 
    // }:{ 
    //     loading:boolean, 
    //     error?: ApolloError, 
    //     data?:QueryResult
    // } = useQuery(getLatestPosts);
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
            {/* <AlternativeHeader2 bgColor='bg-gray-800'/> */}
            <Header/>
            <MainContent maxWidth='max-w-7xl' bgColor='bg-white' featuredPost={featuredPosts?.posts[0]}/>
            {/* <DefaultTabs/> */}
            <SecondaryContent title='Latest' maxWidth='max-w-7xl'>
                
                {latestPosts ? (
                    latestPosts.posts?.map((post, index) => (
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
                    ))    
                ):(
                    <>
                        <Skeleton className="h-96 w-96"/>
                        <Skeleton className="h-96 w-96"/>
                        <Skeleton className="h-96 w-96"/>
                    </>
                )}
            </SecondaryContent>
            {/* <MainSecondaryContent title='Favorites' maxWidth='max-w-7xl'>
                {favorites.posts.slice(1).map((post, index) => (
                    <SecondDesign
                        author={post.author}
                        title={post.title}
                        tags={post.categories}
                        url={post.url}
                        date={post.date}
                        excerpt={post.excerpt}
                        imageAlt={post.title}
                        imageUrl={post.featuredImage}
                        content={post?.content}
                        key={index}
                    />
                ))}
            </MainSecondaryContent> */}
            <GoToTop/>
        </Main>
    );
};

export default Index;
