import { PostCollection, PostsConnection } from "@/props/PostConnectionProps"
import { SubMainBlogCard, SubMainImagelessBlogCard } from "./BlogCard"
import Skeleton from "./Skeleton"

export const MultiBlog = ({
    loadedItems
}:{loadedItems:PostCollection | null}) => {
    return(
        <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {loadedItems ? 
                loadedItems.postsConnection.edges.map((edge) => (
                    (edge.node.coverImage?.url 
                        ?
                            <SubMainBlogCard 
                                coverImage={edge.node.coverImage}
                                slug={'/blog/'+edge.node.category.slug+'/'+edge.node.slug}
                                publishedAt={edge.node.publishedAt}
                                // tags={card.imageUrl}
                                title={edge.node.title}
                                author={edge.node?.author}
                                excerpt={edge.node.excerpt}
                                category={edge.node.category}
                                id={edge.node.id}
                                bgColor='bg-gray-300 dark:bg-gray-500'
                                // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                key={edge.node.id}
                            />
                        : 
                            <SubMainImagelessBlogCard 
                                slug={'/blog/'+edge.node.category.slug+'/'+edge.node.slug}
                                publishedAt={edge.node.publishedAt}
                                // tags={card.imageUrl}
                                title={edge.node.title}
                                author={edge.node?.author}
                                excerpt={edge.node.excerpt}
                                id={edge.node.id}
                                bgColor='bg-gray-300 dark:bg-gray-500'
                                // dimension='w-[382px] h-[382px] sm:w-[270px] sm:h-[270px]'
                                key={edge.node.id}
                            />
                    )
                ))
            :
                <>
                    <Skeleton className="w-full h-[20rem] sm:h-[22.5rem] md:h-[22.5rem]"/>
                    <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                    <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                    <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                </>
            }
        </div>
    )
}