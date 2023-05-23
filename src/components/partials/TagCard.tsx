import React from "react";

type imageUrl = {
    url:string
}

type cardProps = {
    title: string,
    total: number,
    color?: string,
}

const CategoryCard = ({ title, total, color }:cardProps) => {
    return (
        <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                <span className={`inline-block h-4 w-4 ${color ?? 'bg-slate-700'} mr-3`}></span>
                    {title}
                <span className="text-gray-500 ml-auto">{total} post{total > 1 ? 's' : ''}</span>
                <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
            </a>
        </li>
    );
};

export default CategoryCard;
