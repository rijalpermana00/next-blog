import React from "react";
import Card from "./partials/Card";
import { FourthDesign } from "./partials/BlogPost";
import { Main } from "@/layouts/Main";

export const cards = [
  {
    id: 1,
    title: "Card 1",
    width: '600px',
    imageUrl: {
      url: "https://dummyimage.com/1200/e5f2e5",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra ipsum, non tincidunt velit.",
  },
  {
    id: 2,
    title: "Card 2",
    width: '40rem',
    imageUrl: {
      url: "https://dummyimage.com/800x600/000",
    },
    description:
      "Vivamus id bibendum lorem. Sed posuere magna eget nibh tincidunt, vel fringilla orci blandit.",
  },
  {
    id: 3,
    title: "Card 3",
    width: '20rem',
    imageUrl: {
      url: "https://dummyimage.com/600x400/000",
    },
    description:
      "Donec eget turpis sem. In hac habitasse platea dictumst. Integer vel dolor sapien.",
  },
  {
    id: 4,
    title: "Card 4",
    width: '50rem',
    imageUrl: {
      url: "https://dummyimage.com/400x1000/fff",
    },
    description:
      "Nam non odio vel lorem placerat maximus. Fusce laoreet lectus ac ante bibendum faucibus.",
  },
  {
    id: 5,
    title: "Card 5",
    width: '20rem',
    imageUrl: {
      url: "https://dummyimage.com/800x600/fff",
    },
    description:
      "Sed sed lectus eget neque pellentesque suscipit. Sed sed risus elit. Nulla facilisi.",
  },
];

const counter = cards.length;
const width = `calc(100% * `+counter+` / 12)`;
const height = (320 * counter * 2) /1.5 

const CardList = () => {
  return (
    <Main>
      <div className={`mx-auto max-w-7xl sm:p-6 p-4`}>
        <div className="flex">
          <div className="w-2/3 m-4 flex-grow-0 basis-auto">
            <div className={`flex flex-col flex-wrap content-start`} style={{width:width, height:height}}>  
              {/* <div className=""> */}
                {/* <div> */}
                {cards.map((card) => (
                  // <div key={card.id}>
                  <>
                    <Card
                      title={card.title}
                      imageUrl={card.imageUrl}
                      description={card.description}
                    />
                  </>
                    // <FourthDesign
                    //     title={card.title}
                    //     // coverImage={{url:card.imageUrl}}
                    //     // tags={post.tags}
                    //     publishedAt='2022-02-20'
                    //     excerpt={card.description}
                    //     content={{html:card.description}}
                    //     slug='anu-bang'
                    //     id="1"
                    //     // key={index}
                    // />
                  // </div>
                ))}
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
          <div className="w-1/3 m-4 flex-col flex-wrap content-start">
            <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                <ul>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Nutrition
                      <span className="text-gray-500 ml-auto">23 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                      Food & Diet
                      <span className="text-gray-500 ml-auto">18 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                      Workouts
                      <span className="text-gray-500 ml-auto">34 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" className="flex items-center text-gray-600 cursor-pointer">
                      <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                      Immunity
                      <span className="text-gray-500 ml-auto">9 articles</span>
                      <i className='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
        </div>  
      </div>
    </Main>
  );
};

export default CardList;
