import Header from "./Header";
import post from '@/config/post.json'
import MainBlog from "./MainBlog";

type props = {
    bgColor?: 'bg-gray-200' | 'bg-white' | undefined ,
}

export const MainContent = ({
    bgColor,
}:props) => {
    
    const posts = post.posts;
  
    return (
        <div className={`p-4 md:p-10 ${bgColor ?? 'bg-white'}`}>
            <Header/>
            <div className='pb-4'>
                {posts.slice(0, 1).map((post,index) => (
                    <MainBlog
                        author={post.author}
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
    );
}
