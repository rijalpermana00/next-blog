import { useState } from "react";
import Image from 'next/image';
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

const MainBlog = ({
  imageUrl,
  imageAlt,
  authorName,
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
    <div className="col-12 relative">
      <a href={imageUrl}>
        <Image
            alt={imageAlt}
            src={imageUrl}
            onError={() => {
                handleImageError();
            }}
            className="rounded-lg relative object-cover sm:brightness-75 max-h-48 sm:max-h-[32rem]"
            width={100000}
            height={100000}
        />
      </a>
      {mainImageLoaded && (
        <div
          className="text-black sm:absolute sm:bottom-0 sm:left-0 sm:p-4 sm:text-white"
        >
          <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-text">
            <li>
              <a
                className="flex items-center hover:text-primary text-sm"
                href="/authors/mark-dinn"
              >
                <Image
                    alt={authorName}
                    src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75"
                    className="mr-2 h-6 w-6 rounded-full object-cover hidden sm:block"
                    width={50}
                    height={50}
                    loading="lazy"
                    decoding="async"
                />
                <span>{authorName} - {date}</span>
              </a>
            </li>
          </ul>
          <h3 className="mb-2 text-3xl font-bold">
            <a className="block hover:text-primary leading-8" href="/post-1">
              {title}
            </a>
          </h3>
          <p className="text-black sm:text-white sm:flex">
            {excerpt}
          </p>
          <ul className="mt-4 flex flex-wrap items-center text-text">
            {tags.map((item, index) => (
              <li key={index}>
                <Badge text={item.name} className="sm:border sm:border-white sm:bg-transparent"/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainBlog;