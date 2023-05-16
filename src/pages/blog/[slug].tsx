import { Main } from '@/layouts/Main';
import blog from '@/config/blog.json';
import Blog from '@/components/partials/Blog';
import { SecondaryContent } from '@/components/partials/SecondaryContent';
import { FourthDesign } from '@/components/partials/BlogPost';
import GoToTop from '@/components/partials/GoToTop';
import { Post } from '@/props/PostProps';
import { useEffect, useState } from 'react';
import { getPost } from '@/services/GetPost';

const Slug = () => {
    const [post, setPost] = useState<Post | null>(null);
    
    useEffect(() => {
        
        const fetchPost = async () => {
            try {
                const data = await getPost();
        
                setPost(data);
              
            } catch (error) {
              console.log(error);
            }
          };
          fetchPost();
    },[]);
    
    const createExcerpt = (content: string, maxLength: number = 200): string => {
        if (content.length <= maxLength) {
          return content;
        }
        const truncatedContent = content.slice(0, maxLength);
        return truncatedContent.slice(0, truncatedContent.lastIndexOf(' ')) + '...';
    };  
    
    return (
        <Main>
            <div className={`py-10 sm:py-16 px-4 sm:px-32 sm:max-w-5xl sm:mx-auto`}>
                {post && (
                    <Blog
                        author={post.author}
                        title={post.title}
                        tags={post.tags}
                        slug={post.slug}
                        publishedAt={post.publishedAt}
                        content={post.content}
                        excerpt={post.excerpt}
                        coverImage={post.coverImage}
                        id={post.id}
                    />
                )}
            </div>
            {/* <SecondaryContent title='Other Posts' order='text-center' maxWidth='max-w-7xl'>
                {post.posts.slice(1).map((post, index) => (
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
            </SecondaryContent> */}
            <GoToTop/>
        </Main>
    );
};

export default Slug;
