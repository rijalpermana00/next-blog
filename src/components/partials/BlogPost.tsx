import Image from "next/image";
import Badge from "./Badge";
import { PostProps } from "@/props/PostProps";

const BlogPost = ({
  imageUrl,
  imageAlt,
  authorName,
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
            <span>{authorName} - {date}</span>
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

export default BlogPost;
