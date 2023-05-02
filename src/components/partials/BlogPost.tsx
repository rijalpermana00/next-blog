import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

const BlogPost = ({
  imageUrl,
  imageAlt,
  authorName,
  date,
  category,
  title,
  excerpt,
}: PostProps) => {
  return (
    <div className="col-12 sm:col-6 mb-4">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={1080}
        height={445}
        className="rounded-lg"
      />
      <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-sm">
        <li>
          <span>{authorName}</span>
        </li>
        <li>{date}</li>
      </ul>
      <h3 className="mb-2 text-base font-bold">
        <a className="block hover:text-primary" href="/post-2">
          {title}
        </a>
      </h3>
      <p className="text-sm">{excerpt}</p>
      <ul className="mt-4 flex flex-wrap items-center text-text">
        {category.slice(0, 2).map((item, index) => (
          <li key={index}>
            <Badge text={item.name}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPost;
