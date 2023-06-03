import Image from "next/image";
import Badge from "./Badge";
import { useState } from "react";
import ShareButtonGroup, { ShareButtonGroupAlt } from "./Sharer";
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
        <div className="text-gray-800 dark:text-white">
            <div className="col-12 sm:col-6 mb-4">
                <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-5xl m-0 font-bold leading-snug barlow">
                    {title}
                </h1>
            </div>
            <div className="col-12 sm:col-6">
                <ul className="mb-2 flex flex-wrap items-center space-x-3">
                    <li>
                        <p className="mb-4 text-primary-500">Posted on <Moment format="DD MMM YYYY">{publishedAt}</Moment></p>
                    </li>
                </ul>
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
                <div dangerouslySetInnerHTML={{ __html: content.html }}/>
            </div>
            <hr/>
            <ShareButtonGroup url={slug} title={title}/>
            <DisqusComments post={{
                id:id,
                title:title,
                url:'https://sani-blog.vercel.app/blog/'+slug
            }}/>
            <hr/>
            <div className="mt-10">
                <h5 className="font-bold text-lg text-gray-700 dark:text-gray-300 px-1 mb-2">Maybe You will like this</h5>
                <MultiBlog loadedItems={similarPosts}/>
            </div>
        </div>
    );
};

export default Blog;
