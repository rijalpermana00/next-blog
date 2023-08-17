import { Main } from '@/layouts/Main';
import Blog from '@/components/partials/Blog';
import GoToTop from '@/components/partials/GoToTop';
import { useRouter } from 'next/router';
import { GetPost } from '@/services/GetPost';
import Skeleton from '@/components/partials/Skeleton';
import { MultiBlog } from '@/components/partials/MultiBlog';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import AppConfig from '@/utils/AppConfig';
import { useEffect } from 'react';

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    
    const {postData,loadingPost,errorPost} = GetPost(slug);
    
    const post = postData?.post;
    
    const similarPosts = GetPosts({
        total: 4,
    });
          
    let cannon;
        
    useEffect(() => {
        cannon = window.location.href;
    },[]);

    return (
        <Main>
            <Meta 
                title={`[` + post?.category?.name + `]` + ` ` + post?.title +` `+ post?.author?.name} 
                description={post?.excerpt ?? AppConfig.description} 
                canonical={cannon} 
            />
            {loadingPost 
                ? (
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
                ) 
                : post
                    ? (
                        <Blog
                            category={post.category}
                            author={post.author}
                            title={post.title}
                            tags={post.tags}
                            slug={'/blog/'+post?.category?.slug+'/'+post.slug}
                            publishedAt={post.publishedAt}
                            content={post.content}
                            excerpt={post.excerpt}
                            coverImage={post.coverImage}
                            id={post.id}
                        />
                    )
                    :
                    <>
                        <div className='max-w-3xl mx-auto'>
                            <div className="bg-white dark:bg-night border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4 text-center">Uh Oh, nothing to see here</p>
                            </div>
                        </div>
                        <br/>
                        <div className='max-w-5xl mx-auto'>
                            <div className="my-10">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-col">
                                        <h5 className="font-bold text-lg text-gray-700 dark:text-gray-300 px-1 mb-2">Meanwhile, you can read another</h5>
                                    </div>
                                    {/* <div className="flex flex-row flex-wrap">
                                        <h5 className="font-bold text-lg text-gray-700 dark:text-gray-300 px-1 mb-2"><a href="">More</a></h5>
                                    </div> */}
                                </div>
                                <MultiBlog loadedItems={similarPosts.postData} rows={`sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4`} width="7xl"/>
                            </div>
                        </div>
                    </>
            }
            <GoToTop/>
        </Main>
    );
};

export default Slug;
