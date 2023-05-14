import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShare, FaHeart, FaComment } from "react-icons/fa";
import Example from "./Test";

type props = {
    url: string;
    title: string;
}

export default function ShareButtonGroup({ url }:props) {
  const shareText = "Check out this awesome post!";

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/share?url=${url}&text=${shareText}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;

    return (
        <div className="mt-6 bottom-4 right-4">
            <p className="text-sm font-medium text-gray-500 mb-2">Share this:</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 mr-2">
                <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-3 mr-2">
                <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
                </a>
            </button>
            <button className="bg-blue-300 hover:bg-blue-400 text-white rounded-full p-3 mr-2">
                <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
            </button>
        </div>
    );
}


export function ShareButtonGroupAlt({ url }:props) {
  const shareText = "Check out this awesome post!";

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/share?url=${url}&text=${shareText}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;

    return (
        <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-span-2">
                <button className="bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white rounded-full p-3 mr-2">
                <FaHeart/>
                </button>
                <button className="bg-gray-100 hover:bg-yellow-500 text-gray-700 hover:text-white rounded-full p-3 mr-2">
                <FaComment />
                </button>
            </div>
            <div className="col-span-8"></div>
            <div className="col-span-2 flex justify-end">
                {/* <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 mr-2">
                    <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                    </a>
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-full p-3 mr-2">
                    <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                    </a>
                </button>
                <button className="bg-blue-300 hover:bg-blue-400 text-white rounded-full p-3">
                    <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    </a>
                </button> */}
                <Example/>
            </div>
        </div>

    );
}