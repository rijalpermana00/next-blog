import MainBlog from "./MainBlog";
import { useEffect, useState } from "react";
import { Post } from "@/props/PostProps";
import Skeleton from "./Skeleton";

type props = {
    bgColor?: 'bg-gray-200' | 'bg-white' | undefined ,
    maxWidth?: 'max-w-5xl' | 'max-w-7xl' | 'max-w-full' | undefined
    featuredPost: Post | null
}

export const MainContent = ({
    bgColor,
    maxWidth,
    featuredPost
}:props) => {
  
    return (
        // <div className={`p-4 md:p-10 mt-[-16rem] rounded-t-3xl relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
        <div className={`px-4 sm:px-10 rounded-t-lg relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
            {/* <div className='bg-white pb-4'> */}
                {featuredPost ? (
                    <MainBlog
                        author={featuredPost.author}
                        title={featuredPost.title}
                        coverImage={featuredPost.coverImage}
                        tags={featuredPost.tags}
                        publishedAt={featuredPost.publishedAt}
                        excerpt={featuredPost.excerpt}
                        content={featuredPost.content}
                        slug={featuredPost.slug}
                        id={featuredPost.id}
                        key={featuredPost.id}
                    />
                ) : (
                    <Skeleton className="w-full h-[32rem]"/>
                )}
            {/* </div>     */}
        </div>
    );
}

export const MainContentAlt = ({
    bgColor,
    maxWidth
}:props) => {
    
    const [posts, setPosts] = useState<Post | null>(null);

    // useEffect(() => {
        // const client = getClient();
        // client.query({ query }).then(
        //     (result) => {
        //         if (!result.data.posts) {
        //         return false;
        //         }
        //         setPosts(result.data.posts[0])
        //     }    
        // );
        console.log('run')
    // }, []);
  
    return (
        // <div className={`p-4 md:p-10 mt-[-16rem] rounded-t-3xl relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
        <div className={`px-4 sm:px-10 rounded-t-lg relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
            {/* <div className='bg-white pb-4'> */}
                {/* {posts && (
                    <MainBlog
                        author={posts.author}
                        title={posts.title}
                        coverImage={posts.coverImage}
                        tags={posts.tags}
                        publishedAt={posts.publishedAt}
                        excerpt={posts.excerpt}
                        content={posts.content}
                        slug={posts.slug}
                        id={posts.id}
                        key={posts.id}
                    />
                )} */}
            {/* </div>     */}
        </div>
    );
}
