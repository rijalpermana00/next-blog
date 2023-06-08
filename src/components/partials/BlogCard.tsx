import { BlogCardProps } from "@/props/BlogCardProps";
import { Post } from "@/props/PostConnectionProps";
import Link from "next/link";
import Moment from "react-moment";
import { TagBadge } from "./Badge";


export const BlogCard = ({
    coverImage,
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
}:BlogCardProps) => {
    return(
        <div className='flex flex-col'>
            <span className='block pt-[100%] relative w-full leading-4 overflow-hidden rounded-xl'>
                <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl">
                    <img
                        src={`https://picsum.photos/500/300?random`}
                        // alt={coverImage?.fileName}
                        className="h-full w-full object-cover object-center opacity-100"
                    />
                </span>
            </span>
            <div className='m-0 mt-5 flex flex-col'>
                <div className='flex flex-row flex-wrap items-center leading-6 text-base sm:text-xs font-normal public-sans text-gray-500'>
                    20 May 2023
                    <span className='mx-2 w-1 h-1 rounded-full'></span>
                    8 minutes read
                </div>
                <a className='m-0 mt-2 from-inherit'>
                    <p className='text-2xl sm:text-lg font-semibold barlow'>
                        Believing These 7 Myths About Event Keeps You From Growing
                    </p>
                </a>
                {/* {author?.name && ( */}
                    <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3 author'>
                        <div className='w-10 h-10 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2 public-sans'>
                            <img
                                src="https://dummyimage.com/800x600/fff/000"
                                // alt={author?.name}
                                className="h-full w-full text-center text-transparent object-cover object-center"
                            />
                        </div>
                        Rijal
                    </div>
                {/* )} */}
            </div>
        </div>
    )   
}

export const MainBlogCard = ({
    coverImage,
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
}:Post) => {
    return(
        <div className={`bg-white dark:bg-dusk rounded-2xl shadow-lg overflow-hidden`}>
            <span className='block pt-[100%] relative w-full leading-4 overflow-hidden rounded-xl'>
                {coverImage?.url ?(
                    <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl">
                        <img
                            src={coverImage?.url}
                            alt={title}
                            className="h-full w-full object-cover object-center"
                        />
                    </span>
                )
                :
                    <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl bg-gray-500 dark:bg-gray-700"/>
                }
            </span>
            <div className='sm:p-10 p-6 w-full flex flex-col bottom-0 z-[9] absolute text-gray-300 dark:text-white'>
                <div className='flex flex-row flex-wrap items-center leading-[1.5] text-xs font-normal opacity-75'>
                    <Moment format="DD MMM YYYY">{publishedAt}</Moment>
                    <span className='mx-2 w-1 h-1 rounded-full'></span>
                    {/* 8 minutes read */}
                </div>
                <Link href={slug} className='m-0 mt-2 from-inherit'>
                    <p className='text-2xl font-semibold barlow'>
                        {title}
                    </p>
                </Link>
                {excerpt && (
                    <p className='m-0 mt-2 leading-6 text-base font-normal text-gray-700 overflow-hidden text-ellipsis line-clamp-2 flex flex-row'>
                        {excerpt}
                    </p>
                )}
                {/* {author?.name && ( */}
                    <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3'>
                        <div className='w-8 h-8 sm:w-10 sm:h-10 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                            <img
                                src={coverImage?.url}
                                alt={author?.name}
                                className="h-full w-full text-center text-transparent object-cover object-center"
                            />
                        </div>
                        {author?.name}
                    </div>
                {/* )} */}
            </div>
            {coverImage?.url &&(
                <div id="wrapper" className="bg-gradient-to-b from-transparent from-0% to-black to-75% z-[8] top-0 left-0 w-full h-full absolute rounded-2xl"/>
            )}
        </div>
    )   
}

export const SubMainBlogCard = ({
    coverImage,
    slug,
    category,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
    id,
    dimension,
}:Post) => {
    return (
        <div className={`relative rounded-2xl shadow-lg overflow-hidden ${dimension}`}>
            <div className='overflow-hidden'>
                <span className='block pt-[100%] relative w-full leading-4 overflow-hidden rounded-xl'>
                    <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-xl">
                        <img
                            src={coverImage?.url}
                            // src={`https://picsum.photos/500/300?random=` +  id}
                            alt={coverImage?.fileName}
                            className="h-full w-full object-cover object-center opacity-100"
                        />
                    </span>
                </span>
                <div className='p-6 w-full flex flex-col bottom-0 z-[9] absolute text-gray-300 dark:text-white'>
                    <div className='flex flex-row flex-wrap items-center leading-6 text-base sm:text-xs font-normal opacity-75'>
                        <Moment format="DD MMM YYYY">{publishedAt}</Moment>
                        <span className='mx-2 w-1 h-1 rounded-full'></span>
                        {/* 8 minutes read */}
                    </div>
                    <Link href={slug} className='m-0 mt-2 from-inherit'>
                        <p className='text-2xl sm:text-lg font-semibold barlow'>
                            {title}
                        </p>
                    </Link>
                    {excerpt && (
                        <p className='m-0 mt-2 leading-6 text-base sm:text-sm text-gray-300 font-normal overflow-hidden text-ellipsis line-clamp-3'>
                            {excerpt}
                        </p>
                    )}
                    {/* {author?.name && ( */}
                        <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3 author'>
                            {/* <div className='w-8 h-8 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                                <img
                                    src="https://dummyimage.com/800x600/fff/000"
                                    // alt={author?.name}
                                    className="h-full w-full text-center text-transparent object-cover object-center"
                                />
                            </div>
                            {author?.name} */}
                            {/* <ul>
                                {tags.map((cat,index) => (
                                    <TagBadge text={cat.name} url={'/tags/'+cat.slug} key={index}/>
                                ))}
                            </ul> */}
                        </div>
                    {/* )} */}
                </div>
                <div id="wrapper" className="bg-gradient-to-b from-transparent from-0% to-black to-75% z-[8] top-0 left-0 w-full h-full absolute rounded-2xl"/>
            </div>
        </div>
    )
}

export const SubMainImagelessBlogCard = ({
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
    bgColor,
    dimension,
}:Post) => {
    return (
        <div className={`relative rounded-2xl shadow-lg overflow-hidden ${dimension} ${bgColor}`}>
            <div className='overflow-hidden'>
                <span className="block pt-[100%] relative w-full overflow-hidden rounded-xl">
                    <div className='p-6 w-full flex flex-col bottom-0 z-[9] absolute text-gray-800 dark:text-white'>
                        <div className='flex flex-row flex-wrap top-0 items-center leading-6 text-base sm:text-xs font-normal opacity-75'>
                            <Moment format="DD MMM YYYY">{publishedAt}</Moment>
                            <span className='mx-2 w-4 h-4 rounded-full'></span>
                            {/* 8 minutes read */}
                        </div>
                        <Link href={slug} className='m-0 mt-2 text-2xl sm:text-lg font-semibold barlow'>
                            {title}
                        </Link>
                        {excerpt && (
                            <p className='m-0 mt-2 leading-6 text-base sm:text-sm text-gray-200 font-normal overflow-hidden text-ellipsis line-clamp-3'>
                                {excerpt}
                            </p>
                        )}
                        {/* {author?.name && ( */}
                            <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3 author'>
                                {/* <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                                    <img
                                        src="https://dummyimage.com/800x600/fff/000"
                                        // alt={author?.name}
                                        className="h-full w-full text-center text-transparent object-cover object-center"
                                    />
                                </div>
                                {author?.name} */}
                                {/* <ul>
                                    {tags.map((cat,index) => (
                                        <TagBadge text={cat.name} url={'/tags/'+cat.slug} key={index}/>
                                    ))}
                                </ul> */}
                            </div>
                        {/* )} */}
                    </div>    
                </span>
            </div>
        </div>
    )
}