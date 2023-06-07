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
import { CategoryList } from "@/services/Categories";
import { MultiBlog } from "./partials/MultiBlog";
import { PostCollection, PostsConnection } from "@/props/PostConnectionProps";
import { InfoCard } from "./partials/InfoCard";

interface HomeProps {
    posts: PostCollection | null;
    ownerTitle?: string;
    contentTitle?: string;
    category?: string | string[];
}

export const SecondaryContent = (props:HomeProps) => {
    
    const categories = CategoryList();
    
    const tagsData = TagList();
    
    return(
        <div className={`mx-auto max-w-6xl sm:p-6 p-4 mt-8`}>
            <div className='flex flex-row flex-wrap'>
                <div className='flex-grow-0 basis-auto w-full sm:w-2/3 md:w-full lg:w-2/3 mb-10 sm:mb-5 md:mb-10 lg:mb-5'>
                    {props.contentTitle &&
                        <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">{props.contentTitle}</h5>
                    }
                    <MultiBlog loadedItems={props.posts}/>
                </div>
                <div className="flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5">
                    <InfoCard ownerTitle={props.ownerTitle} categories={categories} tagsData={tagsData}/>
                </div>
            </div>
        </div>
    )
}