import { useState } from "react";
import Image from 'next/image';
import Badge from "./Badge";

const MainBlog = () => {
  const [mainImageLoaded, setMainImageLoaded] = useState(true);

  const handleImageError = () => {
    setMainImageLoaded(false);
  };
  
  const items = [
    { text: "Technology", optionalClass: "border border-white bg-transparent mr-2 px-2.5 py-0.5"},
    { text: "Writer Choice", optionalClass: "border border-white bg-transparent mr-2 px-2.5 py-0.5"},
    { text: "Good Design", optionalClass: "border border-white bg-transparent mr-2 px-2.5 py-0.5"},
  ];

  return (
    <div className="col-12 relative">
    <Image
        alt="How to make toys from old Olarpaper"
        src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75"
        onError={() => {
            handleImageError();
        }}
        className="rounded-lg relative object-cover brightness-75"
        width={100000}
        height={100000}
        // style={{objectFit: "cover", filter: "brightness(75%)" }}
    />
      {mainImageLoaded && (
        <div
          className="absolute bottom-0 left-0 p-4 text-white"
        >
          <ul className="mt-4 mb-1 flex flex-wrap items-center space-x-3 text-text">
            <li>
              <a
                className="flex items-center hover:text-primary"
                href="/authors/mark-dinn"
              >
                <Image
                    alt="Rijal Permana"
                    src="https://bookworm-light-nextjs.vercel.app/_next/image?url=%2Fimages%2Fposts%2F01.jpg&w=1920&q=75"
                    className="mr-2 h-6 w-6 rounded-full object-cover"
                    width={50}
                    height={50}
                    loading="lazy"
                    decoding="async"
                />
                <span>Rijal Permana</span>
              </a>
            </li>
            <li>-</li>
            <li>04 Apr 2023</li>
          </ul>
          <h3 className="mb-2 text-3xl font-bold">
            <a className="block hover:text-primary" href="/post-1">
              How to make toys from old Olarpaper
            </a>
          </h3>
          <p className="text-text">
            Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin
            urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus
            vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan ...
          </p>
          <ul className="mt-4 flex flex-wrap items-center text-text">
            {items.map((item, index) => (
              <li>
                <Badge text={item.text} key={index} optionalClass={item.optionalClass}/>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MainBlog;