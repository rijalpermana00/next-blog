import { Main } from '@/layouts/Main';
import post from '@/config/post.json';
import blog from '@/config/blog.json';
import Blog from '@/components/partials/Blog';
import { SecondaryContent } from '@/components/partials/SecondaryContent';
import { FourthDesign } from '@/components/partials/BlogPost';
import GoToTop from '@/components/partials/GoToTop';

const Slug = () => {
    
    // const posts = post.posts;
    const posts = blog.posts;
    
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
                <Blog
                    author={posts.author}
                    title={posts.title}
                    tags={posts.categories}
                    url={posts.url}
                    date={posts.date}
                    content={posts.content}
                    excerpt={createExcerpt(posts.content,100)}
                    imageAlt={posts.title}
                    imageUrl={posts.featuredImage}
                />
            </div>
            <SecondaryContent title='Other Posts' order='text-center' maxWidth='max-w-7xl'>
                {post.posts.slice(1).map((post, index) => (
                    <FourthDesign
                        author={post.author}
                        title={post.title}
                        tags={post.categories}
                        url={post.url}
                        date={post.date}
                        excerpt={post.excerpt}
                        imageAlt={post.featuredImage}
                        imageUrl={post.featuredImage}
                        content={post?.content}
                        key={index}
                    />
                ))}
            </SecondaryContent>
            <GoToTop/>
        </Main>
    );
};

export default Slug;
