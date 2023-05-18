import { BlogCardProps } from "@/props/BlogCardProps";


export const MainBlogCard = ({
    coverImage,
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
}:BlogCardProps) => {
    return(
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden`}>
            <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl">
                <img
                    src={coverImage?.url}
                    alt={title}
                    className="h-full w-full object-cover object-center"
                />
            </span>
            <div className='p-10 w-full flex flex-col bottom-0 z-[9] absolute text-white'>
                <div className='flex flex-row flex-wrap items-center leading-[1.5] text-xs font-normal opacity-75'>
                    {publishedAt}
                    <span className='mx-2 w-1 h-1 rounded-full'></span>
                    8 minutes read
                </div>
                <a href={`blog/`+slug} className='m-0 mt-2 from-inherit'>
                    <p className='text-2xl font-semibold barlow'>
                        {title}
                    </p>
                </a>
                {excerpt && (
                    <p className='m-0 mt-2 leading-6 text-base font-normal overflow-hidden text-ellipsis line-clamp-2 flex flex-row'>
                        {excerpt}
                    </p>
                )}
                {/* {author?.name && ( */}
                    <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3'>
                        <div className='w-10 h-10 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                            <img
                                src="https://dummyimage.com/800x600/fff/000"
                                alt={author?.name}
                                className="h-full w-full text-center text-transparent object-cover object-center"
                            />
                        </div>
                        {author?.name}
                    </div>
                {/* )} */}
            </div>
            <div id="wrapper" className="bg-gradient-to-b from-transparent from-0% to-black to-75% z-[8] top-0 left-0 w-full h-full absolute rounded-2xl"/>
        </div>
    )   
}

export const SubMainBlogCard = ({
    coverImage,
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
    id,
    dimension,
}:BlogCardProps) => {
    return (
        <div className={`relative rounded-2xl shadow-lg overflow-hidden ${dimension}`}>
            <div className='overflow-hidden'>
                <span id="wrapper" className="block text-transparent top-0 left-0 w-full h-full absolute rounded-2xl">
                    <img
                        src={`https://picsum.photos/500/300?random=` +  id}
                        alt={coverImage?.fileName}
                        className="h-full w-full object-cover object-center opacity-100"
                    />
                </span>
                <div className='p-6 w-full flex flex-col bottom-0 z-[9] absolute text-white'>
                    <div className='flex flex-row flex-wrap items-center leading-6 text-base sm:text-xs font-normal opacity-75'>
                        {publishedAt}
                        <span className='mx-2 w-1 h-1 rounded-full'></span>
                        8 minutes read
                    </div>
                    <a href={`blog/`+slug} className='m-0 mt-2 from-inherit'>
                        <p className='text-2xl sm:text-lg font-semibold barlow'>
                            {title}
                        </p>
                    </a>
                    {/* {excerpt && (
                        <p className='m-0 mt-2 leading-6 text-base font-normal overflow-hidden text-ellipsis line-clamp-2 flex flex-row'>
                            {excerpt}
                        </p>
                    )} */}
                    {/* {author?.name && ( */}
                        <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3 author'>
                            <div className='w-8 h-8 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                                <img
                                    src="https://dummyimage.com/800x600/fff/000"
                                    // alt={author?.name}
                                    className="h-full w-full text-center text-transparent object-cover object-center"
                                />
                            </div>
                            {author?.name}
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
}:BlogCardProps) => {
    return (
        <div className={`relative rounded-2xl shadow-lg overflow-hidden ${dimension} ${bgColor}`}>
            <div className='p-6 w-full flex flex-col bottom-0 z-[9] absolute text-white'>
                <div className='flex flex-row flex-wrap top-0 items-center leading-6 text-base sm:text-xs font-normal opacity-75'>
                    {publishedAt}
                    <span className='mx-2 w-4 h-4 rounded-full'></span>
                    8 minutes read
                </div>
                <a href={`blog/`+slug} className='m-0 mt-2 text-2xl sm:text-lg font-semibold barlow'>
                    {title}
                </a>
                {excerpt && (
                    <p className='m-0 mt-2 leading-6 text-base sm:text-sm font-normal overflow-hidden '>
                        {excerpt}
                    </p>
                )}
                {author?.name && (
                    <div className='m-0 mt-2 flex flex-row items-center leading-6 text-sm font-normal pt-3 author'>
                        <div className='w-10 h-10 relative flex items-center justify-center flex-shrink-0 text-xl leading-4 rounded-full overflow-hidden mr-2'>
                            <img
                                src="https://dummyimage.com/800x600/fff/000"
                                // alt={author?.name}
                                className="h-full w-full text-center text-transparent object-cover object-center"
                            />
                        </div>
                        {author?.name}
                    </div>
                )}
            </div>
        </div>
    )
}