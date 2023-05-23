import { splideCardProps } from "@/props/SplideProps";
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

export const SplideCard = (props:splideCardProps) => {
  return (
    <div>
      <a href={`/blog/category/${props.slug}`}>
        <div className='px-3 cursor-pointer'>
          <div className='relative rounded-2xl overflow-hidden'>
            <div className='flex flex-col py-6 w-full z-10 bottom-0 text-center absolute text-white'>
              <div>
                  <h6 className='text-lg'>
                      {props?.title}
                  </h6>
              </div>
              <p className='mt-1'>
                  {props?.total > 1 ? props?.total+' Posts' : props?.total+' Post'}
              </p>
            </div>
            <div id="wrapper" className="bg-gradient-to-b from-transparent from-0% to-black to-75% z-[8] top-0 left-0 w-full h-full absolute rounded-2xl"/>
            <div>
              <span className='block pt-[62%] relative w-full leading-4 overflow-hidden rounded-xl'>
                <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl bg-cover">
                    <img
                        src={`https://picsum.photos/500/300?random`}
                        // alt={coverImage?.fileName}
                        className="h-full w-full object-cover object-center opacity-100"
                    />
                </span>
              </span>
            </div>
          </div>
        </div>      
      </a>
    </div>
  )
}

export default Card;
