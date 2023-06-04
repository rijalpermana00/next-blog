import { PostCollection, PostsConnection } from "@/props/PostConnectionProps"
import { SubMainBlogCard, SubMainImagelessBlogCard } from "./BlogCard"
import Skeleton from "./Skeleton"

interface props{
    loadedItems: PostCollection | null,
    rows?: string
    width?: '4xl' | '2xl' | '3xl' | '5xl' | '6xl' | '7xl'
}

export const MultiBlog = ({
    loadedItems,
    rows,
    width
}:props) => {
    
    const gridCols = rows ?? 'sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2';
    const maxW = width ?? '4xl';
    
    return(
        <div className={`mx-auto max-w-${maxW} grid grid-cols-1 gap-5 ${gridCols}`}>
            {loadedItems ? 
                loadedItems.postsConnection.edges.map((edge) => (
                    (edge.node.coverImage?.url 
                        ?
                            <SubMainBlogCard 
                                coverImage={edge.node.coverImage}
                                slug={'/blog/'+edge.node.category.slug+'/'+edge.node.slug}
                                publishedAt={edge.node.publishedAt}
                                tags={edge.node.tags}
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
                                tags={edge.node.tags} 
                                category={edge.node.category} 
                                coverImage={null}
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