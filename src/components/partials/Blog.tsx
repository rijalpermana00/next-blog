import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";
import { useState } from "react";

const Blog = ({
  imageUrl,
  imageAlt,
  authorName,
  url,
  date,
  tags,
  title,
  content,
  excerpt,
}: PostProps) => {
    
    const [classImage, setClassImage] = useState('');
    
    const handleImage = (h:number,w:number) => {
        console.log(h > w)
        if(h > w){
            setClassImage('')
        }else{
            setClassImage('max-h-48 sm:max-h-[32rem] h-48 sm:h-[32rem]')
        }
    };
    
  return (
    <>
        <div className="col-12 sm:col-6 mb-4">
            <h1 className="mb-10 text-5xl font-bold">
                <a className="block hover:text-primary leading-8" href="/post-1">
                {title}
                </a>
            </h1>
        </div>
        <div className="col-12 sm:relative text-center content-center">
            <a href={url} className="text-center content-center">
                <Image
                    alt={imageAlt}
                    src={imageUrl}
                    onLoadingComplete={(e) => handleImage(e.naturalHeight,e.naturalWidth)} 
                    className={`rounded-lg relative items-center ${classImage}`}
                    style={{ margin: '0 auto'}}
                    width={200000}
                    height={200000}
                />
            </a>
        </div>
        <div>
            <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
            <li>
                <span>{authorName} - {date}</span>
            </li>
            </ul>
            <div dangerouslySetInnerHTML={{ __html: content }} className="text-justify"/>
            <ul className="mt-4 flex flex-wrap items-center text-text">
            {tags.slice(0, 2).map((item, index) => (
                <li key={index}>
                <Badge text={item.name}/>
                </li>
            ))}
            </ul>
        </div>
    </>
  );
};

export default Blog;
