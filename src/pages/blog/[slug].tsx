import { Main } from '@/layouts/Main';
import Blog from '@/components/partials/Blog';
import GoToTop from '@/components/partials/GoToTop';
import Skeleton from '@/components/partials/Skeleton';
import { MultiBlog } from '@/components/partials/MultiBlog';
import { GetPosts } from '@/services/GetPosts';
import { Meta } from '@/layouts/components/Meta';
import AppConfig from '@/utils/AppConfig';
import { GetStaticPost, GetStaticPostsSlugs } from '@/services/GetStaticSlugs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '@/props/PostProps';
import { Tag } from '@/props/PostConnectionProps';

interface slugProps{
    slug: string
    post: Post
    tags: string
    loadingPost: boolean
}

const Slug = ({slug,post,loadingPost,tags}:slugProps) => {
    const similarPosts = GetPosts({
        total: 4,
    });
    
    return (
        <Main>
            <Meta 
                title={`[` + post?.category?.name + `]` + ` ` + post?.title +` By `+ post?.author?.name} 
                description={post?.excerpt ?? AppConfig.description} 
                imageName={post?.coverImage?.fileName}
                imageUrl={post?.coverImage?.url}
                imgHeight={post?.coverImage?.height}
                imgWidth={post?.coverImage?.width}
                canonical={slug}
                keywords={tags}
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
                            slug={'/blog/'+post.slug}
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

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;
    
    const {data,loading} = await GetStaticPost(params?.slug);

    const namesArray = data.post.tags.map(({name}:Tag) => name);
    const namesString = namesArray.join(', ');
    
    return {
        props: {
            slug: params?.slug,
            post: data?.post,
            tags: namesString,
            loading
        },
    }
};

interface dataProps{
    slug: string
    __typename: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await GetStaticPostsSlugs()
    return {
        paths: data.posts.map(({slug}:dataProps) => ({
            params: { slug: slug },
        })),
        fallback: true,
    }
}



export default Slug;
