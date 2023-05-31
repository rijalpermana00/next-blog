import { PostProps, QueryResult } from "@/props/PostProps"
import { MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from "./partials/BlogCard"
import Skeleton from "./partials/Skeleton"

interface HomeProps {
    posts: QueryResult | undefined;
    contentTitle?: string;
}

export const MainContent = (props:HomeProps) => {
    return(
        <div className='max-w-6xl sm:p-6 p-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 flex-row flex-wrap mx-auto justify-center mb-6'>
            <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props.contentTitle}</h5>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
                <div className="relative sm:w-md sm:h-md w-md h-md">
                    {props.posts 
                        ? (
                            props.posts?.posts.slice(0,1).map((post) => (
                                <MainBlogCard 
                                    coverImage={post?.coverImage}
                                    slug={post.slug}
                                    publishedAt={post.publishedAt}
                                    // tags={card.imageUrl}
                                    author={post?.author}
                                    title={post.title}
                                    excerpt={post.excerpt} 
                                    content={post.content}
                                    id={post.id}
                                    key={post.id}
                                />
                            ))
                        ) : (
                            
                            <Skeleton className="w-full h-56 sm:h-96 md:h-96 lg:h-[34rem]"/>
                            // <Skeleton className="w-full h-[34rem]"/>
                        )
                    }
                </div>
                <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center">
                    {props.posts
                        ? (
                            props.posts?.posts.slice(1,5).map((post) => (
                                (post?.coverImage?.url 
                                    ?
                                        <SubMainBlogCard 
                                            coverImage={post?.coverImage}
                                            slug={post.slug}
                                            publishedAt={post.publishedAt}
                                            // tags={card.imageUrl}
                                            title={post.title}
                                            author={post?.author}
                                            excerpt={post.excerpt} 
                                            content={post.content}
                                            id={post.id}
                                            bgColor='bg-gray-300 dark:bg-gray-500'
                                            // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            key={post.id}
                                        />
                                    : 
                                        <SubMainImagelessBlogCard 
                                            coverImage={post?.coverImage}
                                            slug={post.slug}
                                            publishedAt={post.publishedAt}
                                            // tags={card.imageUrl}
                                            title={post.title}
                                            author={post?.author}
                                            excerpt={post.excerpt} 
                                            content={post.content}
                                            id={post.id}
                                            bgColor='bg-gray-300 dark:bg-gray-500'
                                            // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            key={post.id}
                                        />
                                )
                            ))
                        ) : (
                            <>
                                <Skeleton className="w-full h-56 sm:h-96 md:h-96 lg:h-full"/>
                                <Skeleton className="w-full h-0 sm:h-96 md:h-96 lg:h-full"/>
                                <Skeleton className="w-full h-0 sm:h-96 md:h-96 lg:h-full"/>
                                <Skeleton className="w-full h-0 sm:h-96 md:h-96 lg:h-full"/>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}