import React from "react";

type imageUrl = {
    url:string
}

type cardProps = {
    title: string,
    imageUrl?: imageUrl,
    dimension?:string,
    description: string,
}

const CategoryCard = ({ title, dimension, imageUrl, description }:cardProps) => {
    return (
        <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                    Nutrition
                <span className="text-gray-500 ml-auto">23 articles</span>
                <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
            </a>
        </li>
    );
};

export default CategoryCard;
