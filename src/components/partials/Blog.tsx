import Image from "next/image";
import Badge from "./Badge";
import { useState } from "react";
import ShareButtonGroup, { ShareButtonGroupAlt } from "./Sharer";
import Example from "./Test";
import DisqusComments from "./Disqus";
import { Post } from "@/props/PostProps";

const Blog = ({
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
    
  return (
    <>
        <div className="col-12 sm:col-6 mb-4">
            <h3 className="text-5xl font-extrabold leading-10">
                {title}
            </h3>
        </div>
        <div className="col-12 sm:col-6">
            <ul className="mb-2 flex flex-wrap items-center space-x-3">
                <li>
                    <p className="mb-4 text-primary-500">Posted on <time>{publishedAt}</time></p>
                </li>
            </ul>
        </div>
        <div className="col-12 sm:relative text-center content-center mb-10">
            <a href={slug} className="text-center content-center">
                <Image
                    alt={coverImage.fileName}
                    src={coverImage.url}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg relative hidden sm:block max-h-48 sm:max-h-[32rem] h-48 sm:h-[32rem] object-cover items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={4000}
                    height={4000}
                />
                <Image
                    alt={coverImage.fileName}
                    src={coverImage.url}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg object-cover relative block sm:hidden items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={4000}
                    height={4000}
                />
            </a>
        </div>
        <div>
            <div dangerouslySetInnerHTML={{ __html: content.html }}/>
        </div>
        <hr/>
        {/* <ShareButtonGroup url="https://example.com/my-page" title="My Awesome Page" />  */}
        <DisqusComments post={{
            id:id,
            title:title,
            url:'https://sani-blog.vercel.app/blog/'+slug
        }}/>
    </>
  );
};

export default Blog;
