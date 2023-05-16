import { Main } from '@/layouts/Main';
import { FourthDesign } from '@/components/partials/BlogPost';
import post from '@/config/post.json'
import favorites from '@/config/favorites.json'
import { MainContent } from '@/components/partials/MainContent';
import { MainSecondaryContent, SecondaryContent } from '@/components/partials/SecondaryContent';
import Header from '@/components/partials/Header';
import GoToTop from '@/components/partials/GoToTop';
import { useEffect, useState } from 'react';
import { getFeaturedPost } from "@/services/GetFeaturedPost";
import { getLatestPosts } from "@/services/GetLatestPosts";
import { Post } from '@/props/PostProps';

const Index = () => {
    const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
    const [latestPosts, setLatestPosts] = useState<Post[] | null>(null);

    useEffect(() => {
        
        const fetchPosts = async () => {
            try {
                const [featuredPostResult, latestPostsResult] = await Promise.all([
                    getFeaturedPost(),
                    getLatestPosts(),
                ]);
        
                // Check if the featured post is also in the latest posts
                const featuredPostIncluded = latestPostsResult.some(
                    (post:Post) => post.id === featuredPostResult.id
                );
      
              // If the featured post is also in the latest posts, remove it
                const filteredLatestPosts = featuredPostIncluded
                    ? latestPostsResult.filter((post:Post) => post.id !== featuredPostResult.id)
                    : latestPostsResult;
      
                // Limit the latest posts to 6
                const limitedLatestPosts = filteredLatestPosts.slice(0, 6);
        
                setFeaturedPost(featuredPostResult);
                setLatestPosts(limitedLatestPosts);
              
            //   console.log(limitedLatestPosts);
              
            } catch (error) {
              console.log(error);
            }
          };
          fetchPosts();
    },[]);
    
    return (
        <Main>
            {/* <AlternativeHeader2 bgColor='bg-gray-800'/> */}
            <Header/>
            <MainContent maxWidth='max-w-7xl' bgColor='bg-white' featuredPost={featuredPost}/>
            {/* <DefaultTabs/> */}
            <SecondaryContent title='Latest' maxWidth='max-w-7xl'>
                {latestPosts?.map((post, index) => (
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
