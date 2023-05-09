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
            setClassImage('max-w-md')
        }else{
            setClassImage('max-h-md')
        }
    };
    
  return (
    <>
        <div className="col-12 sm:col-6 mb-4">
            <h1 className="mb-3 text-5xl font-bold">
                <a className="block hover:text-primary leading-10" href="/post-1">
                {title}
                </a>
            </h1>
            <ul className="mb-2 flex flex-wrap items-center space-x-3 text-sm">
                <li>
                    <span>Posted on {date}</span>
                </li>
            </ul>
            <ul className="mb-3 flex flex-wrap items-center text-text">
                {tags.slice(0, 2).map((item, index) => (
                    <li key={index}>
                    <Badge text={item.name}/>
                    </li>
                ))}
            </ul>
        </div>
        <div className="col-12 sm:relative text-center content-center mb-10">
            <a href={url} className="text-center content-center">
                <Image
                    alt={imageAlt}
                    src={imageUrl}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg object-contain relative items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={200000}
                    height={200000}
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
