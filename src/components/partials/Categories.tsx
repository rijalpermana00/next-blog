import { CategoryListProps } from "@/props/Categories"
import { CategoryInfos } from "@/props/CategoriesProps"

export const Categories = (props:CategoryInfos) => {
    
    const sortedData = props.data.sort((a, b) => b.count - a.count);
    
    return(
        <div className="max-w-lg mx-auto mb-10 bg-white dark:bg-gray-700 rounded-xl shadow-md p-5">
            <div className="flex flex-col mb-10">
                <h5 className="font-bold text-lg uppercase text-gray-900 dark:text-gray-300 mb-3">CATEGORIES</h5>
                <hr className="mb-7"/>
                <ul className="flex flex-col">
                    {sortedData.slice(0,5).map((category,index) => (
                    <li
                        key={index}
                        className="hover:bg-gray-500 hover:dark:bg-gray-500 items-center rounded-lg px-2 py-2"
                    >
                        <a 
                            className={`flex items-center justify-between text-sm ${props.active === category.slug ? 'text-black dark:text-white font-extrabold' : 'text-gray-500 hover:text-gray-200 dark:text-gray-400 font-semibold'}`}
                            href={'/categories/'+category.slug}
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