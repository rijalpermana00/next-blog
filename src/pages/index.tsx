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
import { Categories } from '@/services/Categories';
import { Splides } from '@/components/partials/Splide';
import { TagBadge } from '@/components/partials/Badge';
import OwnerCard from '@/components/partials/OwnerCard';
import { TagsConnectionData } from '@/props/TagsProps';
import { ThemeProps } from '@/props/ThemeProps';
import { MainContent } from '@/components/MainContent';
import { SecondaryContent } from '@/components/SecondaryContent';


const Index = ({setTheme,isDarkMode}:ThemeProps) => {
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
    
    const { 
        loading:loadingTags, 
        error:errorTags, 
        data:tagsData
    }:{ 
        loading:boolean, 
        error?: ApolloError, 
        data?:TagsConnectionData
    } = useQuery(getTags);
    
    return (
        <Main setTheme={setTheme} isDarkMode={isDarkMode}>
            {/* <div className={`mx-auto max-w-7xl sm:p-6 p-4`}> */}
                <Header/>
                <MainContent featuredPosts={featuredPosts}/>
                <hr/>
                {categories.length > 0 
                    ? 
                        <Splides data={categories}/>
                    :
                        <>
                        </>
                }
                <hr/>
                <SecondaryContent latestPosts={latestPosts} tags={tagsData}/>
            {/* </div> */}
            <GoToTop/>
        </Main>
        
    );
};

export default Index;
