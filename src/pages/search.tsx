import { Main } from '@layouts/Main';
// import Posts from "@layouts/partials/Posts";
// import { getSinglePage } from "@lib/contentParser";
// import { slugify } from "@lib/utils/textConverter";
// import { useSearchContext } from "context/state";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { GetPosts } from '@/services/GetPosts';
import { MultiBlog } from '@/components/partials/MultiBlog';
import { useEffect, useState } from 'react';
import { InfoCard } from '@/components/partials/InfoCard';
import { CategoryList } from '@/services/Categories';
import { TagList } from '@/services/Tags';
import { useLazyQuery } from '@apollo/client';
import { getPosts } from '@/services/queries/posts/GetPostsPaginate';
import { PostCollection } from '@/props/PostConnectionProps';
import Skeleton from '@/components/partials/Skeleton';

interface Props {
    authors: any; // Replace "any" with appropriate type
}

export const SearchPage = ({ authors }: Props) => {
    const router = useRouter();
    const { query } = router;
    const keyword = query.key;
    const [loadedItems, setLoadedItems] = useState<PostCollection | null>(null);
    const [lastId, setLastId] = useState<string | null>(null);
    const [nextAvail, setNextAvail] = useState(false);
    
    const {postData,loadingPost,errorPost} = GetPosts({keyword:keyword})
    
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
    
    useEffect(() => {
        if(loadedItems?.postsConnection.edges) {
            setLastId(loadedItems.postsConnection.pageInfo.endCursor)
            setNextAvail(loadedItems.postsConnection.pageInfo.hasNextPage)
        }
    }, [loadedItems?.postsConnection.edges]);
    
    const categories = CategoryList();
    
    const tagsData = TagList();
    
    const loadMoreItems = () => {

        if(loading){
            return false
        }
        
        let queryVariables = { 
            after: lastId,
        };
    
        loadMore( {
          variables: queryVariables,
        } );
    };
console.log(postData)
return (
    <Main title={`Search results for ${query.key}`}>
    <div className="section text-gray-800 dark:text-gray-200">
        <div className="container">
            <h1 className="h2 mb-8 text-center leading-hero text-6xl font-semibold">
                Search results for <span className="text-primary">{query.key}</span>
            </h1>
            <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
                <div className="flex flex-row flex-wrap">
                    <div className="flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5">
                        {loadingPost || postData && postData.postsConnection.edges.length > 0
                            ? 
                                <>
                                    <MultiBlog loading={loadingPost} loadedItems={postData}/>
                                    <div className="flex flex-col items-center pt-10 pb-20 md:pb-0">
                                        { nextAvail &&  
                                            <button 
                                                onClick={loadMoreItems}
                                                className="inline-flex items-center justify-center relative bg-white dark:bg-dusk text-gray-400 dark:text-white font-bold px-2 py-3 cursor-pointer border-gray-700 dark:border-dusk border rounded-lg text-sm">
                                                {loading ? 'Loading...' : 'Load More'}
                                            </button>
                                        }
                                    </div>
                                </>
                            :
                            <div className="bg-white dark:bg-night border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">404</p>
                                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4 text-center">Uh Oh, nothing to see here</p>
                            </div>
                        }
                    </div>
                    <div className="flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5">
                        <InfoCard categories={categories} tagsData={tagsData} ownerTitle="About Me"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Main>
);
};

export default SearchPage;

// get authors data
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const authors = getSinglePage("content/authors");
//   return {
//     props: {
//       authors: authors,
//     },
//   };
// };
