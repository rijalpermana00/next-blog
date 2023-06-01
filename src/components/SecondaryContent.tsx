import { PostProps, QueryResult } from "@/props/PostProps"
import { MainBlogCard, SubMainBlogCard, SubMainImagelessBlogCard } from "./partials/BlogCard"
import Skeleton from "./partials/Skeleton"
import OwnerCard from "./partials/OwnerCard";
import { TagBadge } from "./partials/Badge";
import { TagsConnectionData } from "@/props/TagsProps";
import { ApolloError, useQuery } from "@apollo/client";
import { getTags } from "@/services/queries/GetTags";
import { Categories } from "./partials/Categories";
import { TagList } from "@/services/Tags";

interface HomeProps {
    posts: PostProps;
    ownerTitle?: string;
    contentTitle?: string;
}

export const SecondaryContent = (props:HomeProps) => {
    
    const categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
    ];
    
    const tagsData = TagList();
    
    return(
        <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
            <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5'>
                    <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props.contentTitle}</h5>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {props.posts ? 
                        
                            props?.posts?.posts.map((post) => (
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
                            :
                            <>
                                <Skeleton className="w-full h-[20rem] sm:h-[22.5rem] md:h-[22.5rem]"/>
                                <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                                <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                                <Skeleton className="w-full h-0 sm:h-[22.5rem] md:h-[22.5rem]"/>
                            </>
                        }
                    </div>
                </div>
                <div className='flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5'> 
                    <OwnerCard title={props.ownerTitle}/>
                    <Categories categories={categories} />
                    <div className="mb-4">
                        <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2"> Tags </h5>
                        <ul>
                            {tagsData?.tags.map((cat,index) => (
                                <TagBadge text={cat.name} url={'/tags/'+cat.slug} key={index}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}