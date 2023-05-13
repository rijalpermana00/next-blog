import { useState } from "react";
import Image from 'next/image';
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

export const MainBlog = ({
  imageUrl,
  imageAlt,
  url,
  author,
  date,
  tags,
  title,
  excerpt,
}: PostProps) => {
  const [mainImageLoaded, setMainImageLoaded] = useState(true);

  const handleImageError = () => {
    setMainImageLoaded(false);
  };
  
  return (
    // <div className='w-full max-w-md sm:max-w-7xl hover:shadow-2xl scale-95 hover:scale-100 mx-auto transition ease-out delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
    <div className='w-full max-w-md sm:max-w-7xl hover:shadow-2xl hover:translate-y-1 mx-auto transition ease-out delay-75 bg-white rounded-lg overflow-hidden'>
      <div className='max-w-md sm:max-w-7xl mx-auto'>
        <div className="col-12 mb-4 sm:mb-0 sm:relative">
          <a href={url}>
            <Image
                alt={imageAlt}
                src={imageUrl}
                onError={() => {
                    handleImageError();
                }}
                className="relative max-h-48 sm:max-h-[32rem] h-48 sm:h-[32rem] object-cover"
                width={200000}
                height={200000}
            />
          </a>
          {mainImageLoaded && (
            <div
              className="text-black sm:absolute sm:bottom-0 sm:left-0 sm:p-4 sm:text-white sm:w-full sm:rounded-b-lg sm:bg-black sm:opacity-80 px-4 sm:px-6"
            >
              <p className="mb-1 text-sm text-primary-500">Posted on <time>18 Nov 2022</time></p>
              <h3 className="text-3xl font-bold">
                <a className="block hover:text-primary leading-8" href="/post-1">
                  {title}
                </a>
              </h3>
              <p className="flex sm:flex-row flex-wrap w-full mt-1 overflow-hidden text-black sm:text-white text-justify">
                {excerpt}
              </p>
              {/* <p className="text-black sm:text-white sm:flex">
                {excerpt}
              </p> */}
              {/* <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
                <li>
                  <a
                    className="flex items-center hover:text-primary text-sm"
                    href="/authors/mark-dinn"
                  >
                    <span>Posted on {date}</span>
                  </a>
                </li>
              </ul> */}
              <ul className="mt-4 sm:mt-4 flex flex-wrap items-center text-text">
                {tags.map((item, index) => (
                  <li key={index}>
                    <Badge text={item.name} className="sm:border sm:border-white sm:bg-transparent"/>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainBlog;