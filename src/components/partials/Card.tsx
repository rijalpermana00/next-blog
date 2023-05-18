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

const Card = ({ title, dimension, imageUrl, description }:cardProps) => {
  return (
    <div className={`bg-white flex flex-col relative rounded-lg shadow-lg overflow-hidden ${dimension} max-h-80 h-80 w-80 m-4`}>
        {imageUrl?.url &&(
            <img
            src={imageUrl.url}
            alt={title}
            className="h-full w-full object-cover object-center"
            />
        )}
      <div className="p-4">
        <h2 className="text-gray-900 font-semibold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
