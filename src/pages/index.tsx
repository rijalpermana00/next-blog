import MainBlog from '@/components/partials/MainBlog';
import { Main } from '../layouts/Main';
import Post from '@/components/partials/BlogPost';
import post from '../config/post.json'
import favorites from '../config/favorites.json'
import Header from '@/components/partials/Header';

const Index = () => {
    
    const posts = post.posts;
    
    const createExcerpt = (content: string, maxLength: number = 200): string => {
        if (content.length <= maxLength) {
          return content;
        }
        const truncatedContent = content.slice(0, maxLength);
        return truncatedContent.slice(0, truncatedContent.lastIndexOf(' ')) + '...';
    };  
    
    return (
        <Main>
            <Header/>
            <div className='pb-4'>
            {posts.slice(0, 1).map((post,index) => (
                <MainBlog
                    authorName={post.author.name}
                    title={post.title}
                    tags={post.categories}
                    date={post.date}
                    excerpt={createExcerpt(post.content,100)}
                    imageAlt={post.title}
                    imageUrl={post.featuredImage}
                    key={index}
                />
            ))}
            </div>
            <div className='pt-10'>
                <h3 className="text-3xl font-bold text-left pt-10 pb-3">
                    <a className="block hover:text-primary" href="/post-1">
                        LATEST 
                    </a>
                    <hr/>
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {posts.slice(1).map((post, index) => (
                        <Post
                            authorName={post.author.name}
                            title={post.title}
                            tags={post.categories}
                            date={post.date}
                            excerpt={createExcerpt(post.content,100)}
                            imageAlt={post.title}
                            imageUrl={post.featuredImage}
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <div className='pt-10'>
                <h3 className="text-3xl font-bold text-left pt-10 pb-3">
                    <a className="block hover:text-primary" href="/post-1">
                        FAVORITES 
                    </a>
                    <hr/>
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {favorites.posts.slice(1).map((post, index) => (
                        <Post
                            authorName={post.author.name}
                            title={post.title}
                            tags={post.categories}
                            date={post.date}
                            excerpt={createExcerpt(post.content,100)}
                            imageAlt={post.title}
                            imageUrl={post.featuredImage}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </Main>
    );
};

export default Index;
