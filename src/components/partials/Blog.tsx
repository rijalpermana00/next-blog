import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";
import { useState } from "react";

const Blog = ({
  imageUrl,
  imageAlt,
  author,
  url,
  date,
  tags,
  title,
  content,
  excerpt,
}: PostProps) => {
    
    const [classImage, setClassImage] = useState('');
    
    const handleImage = (h:number,w:number) => {
        if(h > w){
            setClassImage('max-w-xs')
        }else{
            setClassImage('max-h-md')
        }
    };
    
  return (
    <>
        <div className="col-12 sm:col-6 mb-4">
            <h3 className="text-5xl font-extrabold leading-tight">
                {title}
            </h3>
        </div>
        <div className="col-12 sm:col-6">
            <ul className="mb-2 flex flex-wrap items-center space-x-3">
                <li>
                    <p className="mb-4 text-primary-500">Posted on <time>{date}</time></p>
                </li>
            </ul>
        </div>
        <div className="col-12 sm:relative text-center content-center mb-10">
            <a href={url} className="text-center content-center">
                <Image
                    alt={imageAlt}
                    src={imageUrl}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg object-contain relative hidden sm:block items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={4000}
                    height={4000}
                />
                <Image
                    alt={imageAlt}
                    src={imageUrl}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg object-contain relative block sm:hidden items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={4000}
                    height={4000}
                />
            </a>
        </div>
        <div>
            <div dangerouslySetInnerHTML={{ __html: content }} className="text-justify"/>
        </div>
    </>
  );
};

export default Blog;
