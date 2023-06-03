import { TagsConnectionData } from "@/props/TagsProps";
import { getTags } from "@/services/queries/GetTags";
import { ApolloError, useLazyQuery, useQuery } from "@apollo/client";
import { SubMainBlogCard, SubMainImagelessBlogCard } from "./partials/BlogCard";
import Skeleton from "./partials/Skeleton";
import OwnerCard from "./partials/OwnerCard";
import { TagBadge } from "./partials/Badge";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { useEffect, useState } from "react";
import { getPosts } from "@/services/queries/posts/GetPostsPaginate";
import { TagList } from "@/services/Tags";
import { Categories } from "./partials/Categories";
import { CategoryList } from "@/services/Categories";
import { MultiBlog } from "./partials/MultiBlog";

interface HomeProps {
  posts?: PostCollection;
  ownerTitle?: string;
  contentTile?: string;
  category?: string | string[];
}

export const BlogComponents = (props: HomeProps) => {
    const [loadedItems, setLoadedItems] = useState<PostCollection | null>(null);
    const [lastId, setLastId] = useState<string | null>(null);
    const [nextAvail, setNextAvail] = useState(false);

    const categories = CategoryList();
    const tagsData = TagList();

    useEffect(() => {
        if (props.posts) {
          setLoadedItems({postsConnection:props.posts.postsConnection});
          setLastId(props.posts.postsConnection.pageInfo.endCursor)
          setNextAvail(props.posts.postsConnection.pageInfo.hasNextPage)
        }
    }, [props.posts]);
    
    const [ loadMore, { loading } ] = useLazyQuery(getPosts, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ( data ) => {
            setLoadedItems((prevItems: PostCollection | null) => {
                if (prevItems && data && data.postsConnection) {
                    return {
                        ...prevItems,
                        postsConnection:{
                            edges: [...prevItems.postsConnection.edges, ...data.postsConnection.edges],
                            pageInfo: data.postsConnection.pageInfo,
                            __typename: data.postsConnection.__typename,
                        }
                    };
                }
                return null;
            });
            setLastId(data.postsConnection.pageInfo.endCursor)
            setNextAvail(data.postsConnection.pageInfo.hasNextPage)
            
        },
        onError: ( error ) => {
            console.log( error?.graphQLErrors );
        },
    });
    
    const loadMoreItems = () => {

        if(loading){
            return false
        }
        
        let queryVariables = { 
            after: lastId,
            category:props.category
        };
    
        loadMore( {
          variables: queryVariables,
        } );
    };

    return (
        <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
            <div className="flex flex-row flex-wrap">
                <div className="flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5">
                    <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props.contentTile}</h5>
                    <MultiBlog loadedItems={loadedItems}/>
                    <div className="flex flex-col items-center pt-10 pb-20 md:pb-0">
                        { nextAvail &&  
                            <button 
                                onClick={loadMoreItems}
                                className="inline-flex items-center justify-center relative bg-white dark:bg-dusk text-gray-400 dark:text-white font-bold px-2 py-3 cursor-pointer border-gray-700 dark:border-dusk border rounded-lg text-sm">
                                {loading ? 'Loading...' : 'Load More'}
                            </button>
                        }
                    </div>
                </div>
                <div className="flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5">
                    <OwnerCard title={props.ownerTitle} />
                    <Categories data={categories} />
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
