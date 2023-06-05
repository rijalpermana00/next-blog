import { CategoryListProps } from "@/props/Categories"
import { CategoryInfos } from "@/props/CategoriesProps"

export const Categories = ({data}:CategoryInfos) => {
    
    const sortedData = data.sort((a, b) => b.count - a.count);
    
    return(
        <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
            <div className="flex flex-col mb-10">
                <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 px-1 mb-3">CATEGORIES</h5>
                <ul className="flex flex-col">
                    {sortedData.slice(0,5).map((category,index) => (
                    <li
                        key={index}
                        className="hover:bg-gray-500 hover:dark:bg-gray-500 items-center rounded-lg px-2 py-2"
                    >
                        <a 
                            className="text-gray-700 dark:text-gray-300 flex items-center justify-between"
                            href={'/blog/'+category.slug}
                        >
                            <div>
                                {category.categoryName}
                            </div>
                            <div>
                                {category.count}
                            </div>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}