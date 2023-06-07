import { Main } from '@/layouts/Main';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';
import { Post, QueryResult } from '@/props/PostProps';
import Skeleton from '@/components/partials/Skeleton';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { getFeaturedPosts } from '@/services/queries/posts/GetFeaturedPosts';
import { getLatestPosts } from '@/services/queries/posts/GetLatestPosts';
import { BlogCard, MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from '@/components/partials/BlogCard';
import { getTags } from '@/services/queries/GetTags';
import { CategoryList } from '@/services/Categories';
import { Splides } from '@/components/partials/Splide';
import { TagBadge } from '@/components/partials/Badge';
import OwnerCard from '@/components/partials/OwnerCard';
import { TagsConnectionData } from '@/props/TagsProps';
import { ThemeProps } from '@/props/ThemeProps';
import { MainContent } from '@/components/MainContent';
import { SecondaryContent } from '@/components/SecondaryContent';
import { useEffect, useState } from 'react';
import { FeaturedPosts } from '@/services/FeaturedPosts';
import { LatestPosts } from '@/services/LatestPosts';


const Index = () => {
  
    const featuredPosts = FeaturedPosts();
    
    const featuredPostIds = featuredPosts?.postsConnection.edges?.map(edge => edge.node.id) || [];
    
    const latestPosts = LatestPosts(featuredPostIds)
    
    // const categories = CategoryList();
    
    return (
        <Main>
            <Header/>
            <MainContent posts={featuredPosts}/>
            {/* <hr/>
            {categories.length > 0 &&
                <Splides data={categories}/>
            } */}
            <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
                <hr/>
            </div>
            <SecondaryContent posts={latestPosts} ownerTitle='About Me'/>
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
