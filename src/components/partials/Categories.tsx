import { CategoryListProps } from "@/props/Categories"

export const Categories = ({categories}:CategoryListProps) => {
    return(
        <div className="flex flex-col mb-10">
            <h5 className="font-bold text-lg uppercase text-gray-700 dark:text-gray-300 px-1 mb-2">CATEGORIES</h5>
            <ul className="flex flex-col marker:text-sky-400 list-disc">
                {categories.map(category => (
                <li
                    key={category.id}
                    className="flex items-center rounded-lg px-2 py-2"
                >
                    <span className="text-gray-200">{category.name}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}