import { CategoryInfo } from "@/props/CategoriesProps";
import { TagBadge } from "./Badge"
import { Categories } from "./Categories"
import OwnerCard, { OwnerCardAlt } from "./OwnerCard"
import { TagsConnectionData, TagsData } from "@/props/TagsProps";
import { Category } from "@/props/PostProps";
import { Tag } from "@/props/PostConnectionProps";

interface InfoCardProps {
    ownerTitle?: string;
    contentTitle?: string;
    categories: [] | CategoryInfo[];
    active?: string | string[] | undefined;
    tagsData: TagsConnectionData | undefined
}

export const InfoCard = (props:InfoCardProps) => {
    return (
        <>
            <OwnerCardAlt title={props.ownerTitle} />
            <Categories data={props.categories} active={props.active} />
            <div className="mb-4">
                <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
                    <div className="flex flex-col mb-10">
                        <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 mb-3"> Tags </h5>
                        <hr className="mb-7"/>
                        <ul>
                            {props.tagsData?.tags.map((cat, index) => (
                                <TagBadge text={cat.name} url={'/tags/' + cat.slug} key={index} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export const InfoCardAlt = (props:detailPostProps) => {
    return (
        <>
            <OwnerCardAlt title={props.ownerTitle} />
            <DetailPostCard category={props.category} tags={props.tags} />
        </>
    )
}

interface detailPostProps{
    ownerTitle?:string;
    category?: Category | undefined;
    tags?: Tag[]
}

export const DetailPostCard = (props:detailPostProps) => {
    
    return (
        <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
            <div className="flex flex-col mb-10">
                <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 mb-3">POST DETAILS</h5>
                <hr className="mb-5"/>
                <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 mb-3">CATEGORY</h5>
                <ul className="list-disc ml-7 mb-5">
                    <li>
                        <a 
                            className={`flex items-center justify-between text-sm 'text-black dark:text-white font-extrabold`}
                            href={'/categories/'+props.category?.slug}
                        >
                            <div>
                                {props.category?.name}
                            </div>
                        </a>
                    </li>
                </ul>
                <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 mb-3">TAGS</h5>
                <ul>
                    {props?.tags?.map((cat, index) => (
                        <TagBadge text={cat.name} url={'/tags/' + cat.slug} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}