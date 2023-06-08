import { PostProps, QueryResult } from "@/props/PostProps"
import { MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from "./partials/BlogCard"
import Skeleton from "./partials/Skeleton"
import { PostCollection } from "@/props/PostConnectionProps";

interface HomeProps {
    posts: PostCollection | undefined;
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
                            props.posts?.postsConnection.edges.slice(0,1).map((edge) => (
                                <MainBlogCard
                                    tags={edge.node.tags}
                                    category={edge.node.category} 
                                    coverImage={edge?.node?.coverImage}
                                    slug={'/blog/'+edge.node.slug}
                                    publishedAt={edge.node.publishedAt}
                                    // tags={card.imageUrl}
                                    author={edge.node?.author}
                                    title={edge.node.title}
                                    excerpt={edge.node.excerpt} 
                                    id={edge.node.id}
                                    key={edge.node.id}
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
                            props.posts?.postsConnection.edges.slice(1,5).map((edge) => (
                                (edge.node?.coverImage?.url 
                                    ?
                                        <SubMainBlogCard 
                                            coverImage={edge.node?.coverImage}
                                            slug={'/blog/'+edge.node.slug}
                                            publishedAt={edge.node.publishedAt}
                                            // tags={card.imageUrl}
                                            title={edge.node.title}
                                            author={edge.node?.author}
                                            excerpt={edge.node.excerpt} 
                                            id={edge.node.id}
                                            bgColor='bg-gray-300 dark:bg-gray-500'
                                            // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            key={edge.node.id}
                                            tags={edge.node.tags}
                                            category={edge.node.category}
                                        />
                                    : 
                                        <SubMainImagelessBlogCard
                                            slug={'blog/'+edge.node.slug}
                                            publishedAt={edge.node.publishedAt}
                                            // tags={card.imageUrl}
                                            title={edge.node.title}
                                            author={edge.node?.author}
                                            excerpt={edge.node.excerpt}
                                            id={edge.node.id}
                                            bgColor='bg-gray-300 dark:bg-gray-500'
                                            // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                            key={edge.node.id}
                                            tags={edge.node.tags}
                                            category={edge.node.category}
                                            coverImage={edge.node.coverImage}
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