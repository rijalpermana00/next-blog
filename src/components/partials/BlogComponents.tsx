import { TagsConnectionData } from "@/props/TagsProps";
import { getTags } from "@/services/queries/GetTags";
import { ApolloError, useQuery } from "@apollo/client";
import { SubMainBlogCard, SubMainImagelessBlogCard } from "./BlogCard";
import Skeleton from "./Skeleton";
import OwnerCard from "./OwnerCard";
import { TagBadge } from "./Badge";
import { PostsConnection, PostsData } from "@/props/PostConnectionProps";
import { useEffect, useState } from "react";

interface HomeProps {
  posts: PostsConnection;
  ownerTitle?: string;
  contentTile?: string;
}

export const BlogComponents = (props: HomeProps) => {
    const [loadedItems, setLoadedItems] = useState<PostsConnection | undefined>();

  const {
        loading: loadingTags,
        error: errorTags,
        data: tagsData
    }: {
        loading: boolean;
        error?: ApolloError;
        data?: TagsConnectionData;
    } = useQuery(getTags);

    useEffect(() => {
        if (props.posts) {
          setLoadedItems(props.posts);
        }
    }, [props.posts]);

    return (
        <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
            <div className="flex flex-row flex-wrap">
                <div className="flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5">
                    <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props.contentTile}</h5>
                    <div className="mx-auto max-w-4xl grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {loadedItems ? 
                            loadedItems.edges.map((edge) => (
                                (edge.node.coverImage?.url 
                                    ?
                                        <SubMainBlogCard 
                                            coverImage={edge.node.coverImage}
                                            slug={edge.node.slug}
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
                                    : 
                                        <SubMainImagelessBlogCard 
                                            slug={edge.node.slug}
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
                    <div className="flex flex-col items-center pt-10 pb-20 md:pb-0">
                        <button className="inline-flex items-center justify-center relative bg-white dark:bg-dusk text-gray-400 dark:text-white font-bold px-2 py-3 cursor-pointer border-gray-700 dark:border-dusk border rounded-lg text-sm">See More</button>
                    </div>
                </div>
                <div className="flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5">
                    <OwnerCard title={props.ownerTitle} />
                    <div className="mb-4">
                        <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2"> Tags </h5>
                        <ul>
                        {tagsData?.tags.map((cat, index) => (
                            <TagBadge text={cat.name} url={'/tags/' + cat.slug} key={index} />
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
