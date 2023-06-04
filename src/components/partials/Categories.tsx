import { CategoryListProps } from "@/props/Categories"
import { CategoryInfos } from "@/props/CategoriesProps"

export const Categories = ({data}:CategoryInfos) => {
    
    const sortedData = data.sort((a, b) => b.count - a.count);
    
    return(
        <div className="flex flex-col mb-10">
            <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 px-1 mb-2">CATEGORIES</h5>
            <ul className="flex flex-col">
                {sortedData.slice(0,5).map((category,index) => (
                <li
                    key={index}
                    className="flex items-center rounded-lg px-2 py-2"
                >
                    <a 
                        className="text-gray-700 dark:text-gray-300"
                        href={'/blog/'+category.slug}
                    >
                        {category.categoryName}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}