import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

const BlogPost = ({
  imageUrl,
  imageAlt,
  authorName,
  url,
  date,
  tags,
  title,
  excerpt,
}: PostProps) => {
  return (
      <div className='w-full max-w-md hover:shadow-2xl mx-auto transition ease-out delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
        <div className='max-w-md mx-auto'>
          <div className="col-12 sm:col-6 mb-4">
            <div className="relative overflow-hidden pb-48">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="px-4 sm:px-6">
              <ul className="mt-4 mb-3 flex flex-wrap items-center text-text">
                {tags.slice(0, 1).map((item, index) => (
                  <li key={index}>
                    <Badge text={item.name}/>
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 text-base font-bold">
                <a className="block hover:text-primary" href="/post-2">
                  {title}
                </a>
              </h3>
              <p className="text-xs">{excerpt}</p>
              <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
                <li>
                  <span>{authorName} - {date}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogPost;
