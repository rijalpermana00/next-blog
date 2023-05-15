import Header from "./Header";
import post from '@/config/post.json'
import MainBlog from "./MainBlog";
import { useEffect, useState } from "react";
import { getClient } from "@/apollo/Config";
import { gql } from "@apollo/client";
import { Post } from "@/props/PostProps";

type props = {
    bgColor?: 'bg-gray-200' | 'bg-white' | undefined ,
    maxWidth?: 'max-w-5xl' | 'max-w-7xl' | 'max-w-full' | undefined
}

const query = gql`query MyQuery {
    posts(where: {tags_contains_some: "Featured"}, last: 1) {
        id
        slug
        title
        publishedAt
        content {
            html
        }
        author {
            name
            id
        }
        tags
    }
}`;

export const MainContent = ({
    bgColor,
    maxWidth
}:props) => {
    const [posts, setPosts] = useState<Post | null>(null);

    useEffect(() => {
        const client = getClient();
        client.query({ query }).then(
            (result) => {
                if (!result.data.posts) {
                return false;
                }
                setPosts(result.data.posts[0])
            }    
        );
    }, []);
  
    return (
        // <div className={`p-4 md:p-10 mt-[-16rem] rounded-t-3xl relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
        <div className={`px-4 sm:px-10 rounded-t-lg relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
            {/* <div className='bg-white pb-4'> */}
                {posts && (
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

    useEffect(() => {
        const client = getClient();
        client.query({ query }).then(
            (result) => {
                if (!result.data.posts) {
                return false;
                }
                setPosts(result.data.posts[0])
            }    
        );
    }, []);
  
    return (
        // <div className={`p-4 md:p-10 mt-[-16rem] rounded-t-3xl relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
        <div className={`px-4 sm:px-10 rounded-t-lg relative mx-auto ${bgColor ?? ''} ${maxWidth ?? ''}`}>
            {/* <div className='bg-white pb-4'> */}
                {posts && (
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
                )}
            {/* </div>     */}
        </div>
    );
}
