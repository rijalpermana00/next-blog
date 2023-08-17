import { Main } from '@/layouts/Main';
import Blog from '@/components/partials/Blog';
import GoToTop from '@/components/partials/GoToTop';
import { useRouter } from 'next/router';
import { GetPost } from '@/services/GetPost';
import Skeleton from '@/components/partials/Skeleton';
import { Meta } from '@/layouts/components/Meta';
import AppConfig from '@/utils/AppConfig';

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const postData = GetPost(slug);
    
    const post = postData?.postData?.post;
    
    return (
        <Main>
            <Meta title={post?.title ?? AppConfig.title} description={'check this out'}/>
            {post ? (
                <Blog
                    category={post.category}
                    author={post.author}
                    title={post.title}
                    tags={post.tags}
                    slug={'/blog/'+post.slug}
                    publishedAt={post.publishedAt}
                    content={post.content}
                    excerpt={post.excerpt}
                    coverImage={post.coverImage}
                    id={post.id}
                />
            )
            :
            <div className='max-w-3xl mx-auto'>
                <Skeleton className="text-left w-[50vh] h-10 my-7"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[80vh] h-4 my-3"/>
                <Skeleton className="text-left w-[90vh] h-4 my-3"/>
                <Skeleton className="text-left w-[90vh] h-4 my-3"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[90vh] h-4 my-3"/>
                <Skeleton className="text-left w-[80vh] h-4 my-3"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[80vh] h-4 my-3"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[85vh] h-4 my-3"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[85vh] h-4 my-3"/>
                <Skeleton className="text-left w-[85vh] h-4 my-3"/>
                <Skeleton className="text-left w-[70vh] h-4 my-3"/>
                <Skeleton className="text-left w-[90vh] h-4 my-3"/>
                <Skeleton className="text-left w-[85vh] h-4 my-3"/>
                <Skeleton className="text-left w-[90vh] h-4 my-3"/>
            </div>
            }
            <GoToTop/>
        </Main>
    );
};

export default Slug;
