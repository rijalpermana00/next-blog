import { CategoryInfo } from "@/props/CategoriesProps";
import { TagBadge } from "./Badge"
import { Categories } from "./Categories"
import OwnerCard from "./OwnerCard"
import { TagsConnectionData } from "@/props/TagsProps";

interface InfoCardProps {
    ownerTitle?: string;
    contentTitle?: string;
    categories: [] | CategoryInfo[];
    tagsData: TagsConnectionData | undefined
}

export const InfoCard = (props:InfoCardProps) => {
    return (
        <div className="flex-grow-0 basis-auto w-full sm:w-1/3 md:w-full lg:w-1/3 px-0 sm:px-6 md:px-0 lg:px-6 sm:mb-5 md:mb-10 lg:mb-5">
            <OwnerCard title={props.ownerTitle} />
            <Categories data={props.categories} />
            <div className="mb-4">
                <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
                    <div className="flex flex-col mb-10">
                        <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-3"> Tags </h5>
                        <ul>
                            {props.tagsData?.tags.map((cat, index) => (
                                <TagBadge text={cat.name} url={'/tags/' + cat.slug} key={index} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}