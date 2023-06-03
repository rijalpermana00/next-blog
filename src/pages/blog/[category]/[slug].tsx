import { Main } from '@/layouts/Main';
import Blog from '@/components/partials/Blog';
import GoToTop from '@/components/partials/GoToTop';
import { useRouter } from 'next/router';
import { Post } from '@/services/Post';

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const postData = Post(slug);
    
    const post = postData?.post;
        
    return (
        <Main>
            <div className={`px-4 sm:px-32 sm:max-w-5xl sm:mx-auto`}>
                {post && (
                    <Blog
                        category={post.category}
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
            <GoToTop/>
        </Main>
    );
};

export default Slug;
