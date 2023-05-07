import { Main } from '@/layouts/Main';
import post from '@/config/post.json';
import blog from '@/config/blog.json';
import Blog from '@/components/partials/Blog';

const Slug = () => {
    
    // const posts = post.posts;
    const posts = blog.posts;
    console.log(posts)
    
    const createExcerpt = (content: string, maxLength: number = 200): string => {
        if (content.length <= maxLength) {
          return content;
        }
        const truncatedContent = content.slice(0, maxLength);
        return truncatedContent.slice(0, truncatedContent.lastIndexOf(' ')) + '...';
    };  
    
    return (
        <Main>
            {/* {posts.slice(0,1).map((post, index) => ( */}
                <Blog
                    authorName={posts.author.name}
                    title={posts.title}
                    tags={posts.categories}
                    url={posts.url}
                    date={posts.date}
                    content={posts.content}
                    excerpt={createExcerpt(posts.content,100)}
                    imageAlt={posts.title}
                    imageUrl={posts.featuredImage}
                />
            {/* ))} */}
        </Main>
    );
};

export default Slug;
