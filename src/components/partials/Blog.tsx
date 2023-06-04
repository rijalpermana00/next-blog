import Image from "next/image";
import Badge, { TagBadge } from "./Badge";
import { useState } from "react";
import ShareButtonGroup, { ShareButtonGroupAlt, ShareDropDown } from "./Sharer";
import Example from "./Test";
import DisqusComments from "./Disqus";
import { Post } from "@/props/PostProps";
import Moment from "react-moment";
import { MultiBlog } from "./MultiBlog";
import { SimilarPosts } from "@/services/SimilarPosts";

const Blog = ({
    category,
    coverImage,
    slug,
    author,
    publishedAt,
    tags,
    title,
    excerpt,
    content,
    id,
}: Post) => {
    
    const [classImage, setClassImage] = useState('');
    
    const handleImage = (h:number,w:number) => {
        if(h > w){
            setClassImage('max-w-sm')
        }else{
            setClassImage('max-h-sm')
        }
    };
    
    const similarPosts = SimilarPosts(category?.name);
    
    return (
        <>
            <div className={`px-4 sm:px-32 sm:max-w-5xl sm:mx-auto`}>
                <div className="text-gray-800 dark:text-white">
                    <div className="col-12 sm:col-6 mb-4">
                        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl m-0 font-bold leading-snug barlow">
                            {title}
                        </h1>
                    </div>
                    <div className="col-12 sm:col-6">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <div className="relative flex items-center justify-center w-12 h-12">
                                    <img
                                        src="https://picsum.photos/500/300?random"
                                        alt={author?.name}
                                        className="h-full w-full rounded-full text-center text-transparent object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="ml-3 flex flex-col grow-[1]">
                                <h6 className="font-semibold text-sm">{author?.name}</h6>
                                <span className="mt-1 font-normal text-xs"><Moment format="DD MMM YYYY">{publishedAt}</Moment></span>
                            </div>
                            <div className="flex flex-row flex-wrap">
                                <ShareDropDown/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 sm:relative text-center content-center mb-10">
                        {coverImage?.url &&
                            <a href={slug} className="text-center content-center">
                                <Image
                                    alt={coverImage?.fileName ?? ''}
                                    src={coverImage?.url ?? ''}
                                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                                    className={`rounded-lg relative hidden sm:block max-h-48 sm:max-h-[32rem] h-48 sm:h-[32rem] object-cover items-center ${classImage}`}
                                    style={{ margin: '0 auto'}}
                                    width={4000}
                                    height={4000}
                                />
                                <Image
                                    alt={coverImage?.fileName ?? ''}
                                    src={coverImage?.url ?? ''}
                                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                                    className={`rounded-lg object-cover relative block sm:hidden items-center ${classImage}`}
                                    style={{ margin: '0 auto'}}
                                    width={4000}
                                    height={4000}
                                />
                            </a>
                        }
                    </div>
                    <div className="mb-10">
                        <div className="text-left" dangerouslySetInnerHTML={{ __html: content.html }}/>
                    </div>
                    <div className="mb-10 flex flex-row items-center flex-wrap">
                        <h6 className="mr-2">Tags:</h6>
                        {tags?.map((cat,index) => (
                            <TagBadge text={cat.name} url={'/tags/'+cat.slug} key={index}/>
                        ))}
                    </div>
                    <div className="mb-6 flex flex-row">
                        <h6 className="mr-2">Share:</h6>
                        <ShareButtonGroup url={slug} title={title}/>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className='px-4 sm:px-32 sm:max-w-7xl sm:mx-auto'>
                <div className="my-10">
                    <h5 className="font-bold text-lg text-gray-700 dark:text-gray-300 px-1 mb-2"></h5>
                    <MultiBlog loadedItems={similarPosts} rows={'sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4'} width="7xl"/>
                </div>
            </div>
            <div className='px-4 sm:px-32 sm:max-w-5xl sm:mx-auto'>
                <hr/>
                <DisqusComments post={{
                    id:id,
                    title:title,
                    url:'https://sani-blog.vercel.app/blog/'+slug
                }}/>
                <hr/>
            </div>
        </>
    );
};

export default Blog;
