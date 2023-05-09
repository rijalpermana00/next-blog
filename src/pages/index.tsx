import MainBlog from '@/components/partials/MainBlogAlt';
import { Main } from '../layouts/Main';
import Post, { SecondDesign, ThirdDesign } from '@/components/partials/BlogPost';
import post from '../config/post.json'
import favorites from '../config/favorites.json'
import Header from '@/components/partials/Header';

const Index = () => {
    
    const posts = post.posts;
    
    // const createExcerpt = (content: string, maxLength: number = 200): string => {
    //     if (content.length <= maxLength) {
    //       return content;
    //     }
    //     const truncatedContent = content.slice(0, maxLength);
    //     return truncatedContent.slice(0, truncatedContent.lastIndexOf(' ')) + '...';
    // };  
    
    return (
        <Main>
            <div className='p-4 md:p-10 bg-gray-200'>
                <Header/>
                <div className='pb-4'>
                    {posts.slice(0, 1).map((post,index) => (
                        <MainBlog
                            authorName={post.author.name}
                            title={post.title}
                            url={post.url}
                            tags={post.categories}
                            date={post.date}
                            excerpt={post.excerpt}
                            imageAlt={post.title}
                            imageUrl={post.featuredImage}
                            content={post?.content}
                            key={index}
                        />
                    ))}
                </div>    
            </div>
            <div className='p-4 md:p-10 bg-white'>
                <h3 className="text-3xl font-bold text-left pb-3">
                    <a className="block hover:text-primary" href="/post-1">
                        Latest 
                    </a>
                    <hr/>
                </h3>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {posts.slice(1).map((post, index) => (
                        <SecondDesign
                            authorName={post.author.name}
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
                </div>
                <h3 className="text-3xl font-bold text-left pt-10 pb-3">
                    <a className="block hover:text-primary" href="/post-1">
                        Favorites 
                    </a>
                    <hr/>
                </h3>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                    {favorites.posts.slice(1).map((post, index) => (
                        <SecondDesign
                            authorName={post.author.name}
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
                </div>
                <h3 className="text-3xl font-bold text-left pt-10 pb-3">
                    <a className="block hover:text-primary" href="/post-1">
                        Editor Choice 
                    </a>
                    <hr/>
                </h3>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {posts.slice(1).map((post, index) => (
                        <ThirdDesign
                            authorName={post.author.name}
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
                </div>
            </div>
        </Main>
    );
};

export default Index;
