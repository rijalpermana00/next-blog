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
      // <div className='w-full max-w hover:shadow-2xl scale-100 hover:scale-105 mx-auto transition ease-out delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
      <div className='w-full max-w hover:shadow-2xl hover:translate-y-1 mx-auto transition delay-75 bg-white rounded-3xl shadow-md overflow-hidden'>
        <div className='max-w mx-auto'>
          <div className="col-12 sm:col-6">
            <div className="relative overflow-hidden pb-48">
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
              <h3 className="mb-2 text-2xl font-bold">
                <a className="block hover:text-primary leading-7" href="/post-1">
                  {title}
                </a>
              </h3>
              {/* <h3 className="mb-2 text-base font-bold">
                <a className="block hover:text-primary" href="/post-2">
                  {title}
                </a>
              </h3> */}
              <p className="text-xs">{excerpt}</p>
            </div>
            <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
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
    <div className='w-full max-w hover:shadow-2xl hover:translate-y-1 mx-auto transition delay-75 bg-white rounded-3xl overflow-hidden'>
      <div className="max-w mx-auto">
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white flex flex-col">
          <img 
            src={imageUrl} 
            className="aspect-video w-full object-cover" 
            alt={imageAlt}
          />
          <div className="px-4 pb-4 pt-2 sm:px-6 sm:pb-6 sm:pt-3">
            <p className="mb-1 text-sm text-primary-500">John Doe • <time>2022-04-01</time></p>
            <h3 className="text-xl font-extrabold text-gray-900 leading-tight line-clamp-2 mb-2">{title}</h3>
            <p className="mt-1 text-gray-500 flex-1 leading-snug line-clamp-2">{excerpt}</p>
            <div className="mt-4 flex gap-2">
              <span className="inline-block rounded-full text-xs font-semibold mr-2 px-2.5 py-0.5 text-white bg-gray-600 undefined">Studio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export const FourthDesign = ({
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
    <div
      className="flex flex-col min-h-min mb-6 bg-white rounded-lg shadow-lg hover:shadow-2xl"
    >
      <img 
        src={imageUrl}
        className="aspect-video w-full object-cover rounded-t-lg" 
        alt={imageAlt}
      />
      <section className="p-4 pb-0">
        <p className="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
      </section>
      <p
        className="flex sm:flex-row flex-wrap w-full flex-1 px-4 mt-1 overflow-hidden text-gray-500 text-justify"
      >
        {excerpt}
      </p>
      <section className="p-4">
        <ul className="flex flex-wrap items-center text-text">
              {tags.slice(0, 1).map((item, index) => (
                <li key={index}>
                  <Badge text={item.name}/>
                </li>
              ))}
            </ul>
      </section>
    </div>
  )
}

export default BlogPost;
