import { CategoryListProps } from "@/props/Categories"
import { CategoryInfos } from "@/props/CategoriesProps"

export const Categories = ({data}:CategoryInfos) => {
    return(
        <div className="flex flex-col mb-10">
            <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">CATEGORIES</h5>
            <ul className="flex flex-col marker:text-sky-400 list-disc">
                {data.map((category,index) => (
                <li
                    key={index}
                    className="flex items-center rounded-lg px-2 py-2"
                >
                    <a 
                        href={'/blog/'+category.slug}
                        className="text-gray-200"
                    >
                        {category.categoryName}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}