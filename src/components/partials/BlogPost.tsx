import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

const BlogPost = ({
  imageUrl,
  imageAlt,
  author,
  url,
  date,
  tags,
  title,
  excerpt,
}: PostProps) => {
  return (
    <div className="col-12 sm:col-6 mb-4">
      <div className="relative rounded-lg overflow-hidden pb-48">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>
      <div>
        <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
          <li>
            <span>{author.name} - {date}</span>
          </li>
        </ul>
        <h3 className="mb-2 text-base font-bold">
          <a className="block hover:text-primary" href="/post-2">
            {title}
          </a>
        </h3>
        <p className="text-sm">{excerpt}</p>
        <ul className="mt-4 flex flex-wrap items-center text-text">
          {tags.slice(0, 2).map((item, index) => (
            <li key={index}>
              <Badge text={item.name}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const SecondDesign = ({
  imageUrl,
  imageAlt,
  author,
  url,
  date,
  tags,
  title,
  excerpt,
}: PostProps) => {
  return (
      <div className='w-full max-w hover:shadow-2xl scale-100 hover:scale-105 mx-auto transition ease-out delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
        <div className='max-w mx-auto'>
          <div className="col-12 sm:col-6">
            <div className="relative overflow-hidden pb-56">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
              <ul className="mb-3 flex flex-wrap items-center text-text">
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
                  <span>{date}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export const ThirdDesign = ({
  imageUrl,
  imageAlt,
  author,
  url,
  date,
  tags,
  title,
  excerpt,
}: PostProps) => {
  return (
      <div className='w-full max-w hover:shadow-2xl scale-95 hover:scale-100 mx-auto transition ease-out delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
        <div className='max-w mx-auto'>
          <div className="col-12 mb-4 sm:mb-0 sm:relative">
            <a href={url}>
              <Image
                  alt={imageAlt}
                  src={imageUrl}
                  className="relative max-h-48 sm:max-h-[32rem] h-48 sm:h-[32rem] object-cover"
                  width={200000}
                  height={200000}
              />
            </a>
            <div
              className="text-black sm:absolute sm:bottom-0 sm:left-0 sm:p-4 sm:text-white sm:w-full sm:rounded-b-3xl sm:bg-black sm:opacity-80 px-4 sm:px-6"
            >
              <ul className="mt-3 sm:mt-0 mb-3 flex flex-wrap items-center text-text">
                {tags.map((item, index) => (
                  <li key={index}>
                    <Badge text={item.name} className="sm:border sm:border-white sm:bg-transparent"/>
                  </li>
                ))}
              </ul>
              <h3 className="mb-2 text-xl font-bold">
                <a className="block hover:text-primary leading-8" href="/post-1">
                  {title}
                </a>
              </h3>
              <p className="text-black sm:text-white sm:flex">
                {excerpt}
              </p>
              <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
                <li>
                  <a
                    className="flex items-center hover:text-primary text-sm"
                    href="/authors/mark-dinn"
                  >
                    {/* <Image
                        alt={authorName}
                        src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75"
                        className="mr-2 h-6 w-6 rounded-full object-cover hidden sm:block"
                        width={50}
                        height={50}
                        loading="lazy"
                        decoding="async"
                    /> */}
                    <span>By {author.name} on {date}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default BlogPost;
