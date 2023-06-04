import { Fragment, useEffect, useRef, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaShare, FaHeart, FaComment, FaFacebookSquare, FaTwitterSquare, FaShareAlt, FaLink, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Example from "./Test";
import { Menu, Transition } from "@headlessui/react";

type props = {
    url: string;
    title: string;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ShareButtonGroup({ url }:props) {
  const shareText = "Check out this awesome post!";

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareUrl = `https://twitter.com/share?url=${url}&text=${shareText}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;

    return (
        <>
            <button className="bg-transparent hover:bg-blue-600 border-blue-500 border-solid border-2 text-white rounded-xl px-2 py-1 mr-2 inline-flex items-center justify-center">
                <span>
                    <a className="flex flex-row items-center text-gray-800 dark:text-white" href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare className="mr-2"/>
                        Facebook
                    </a>
                </span>
            </button>
            <button className="bg-transparent hover:bg-blue-500 border-blue-400 border-solid border-2 text-white rounded-xl px-2 py-1 mr-2">
                <span>
                    <a className="flex flex-row items-center text-gray-800 dark:text-white" href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare className="mr-2" />
                        Twitter
                    </a>
                </span>
            </button>
            <button className="bg-transparent hover:bg-blue-400 border-blue-300 border-solid border-2 text-white rounded-xl px-2 py-1 mr-2">
                <span>
                    <a className="flex flex-row items-center text-gray-800 dark:text-white" href={linkedinShareUrl} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="mr-2" />
                    LinkedIn
                    </a>
                </span>
            </button>
        </>
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

export function ShareDropDown() {
    return (
      <Menu as="div" className="relative inline-block text-left">
          <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-full p-3 text-sm font-semibold text-gray-600 hover:text-gray-100">
                  <FaShareAlt className="h-4 w-4" aria-hidden="true" />
              </Menu.Button>
          </div>
  
          <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
          >
              <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                      <Menu.Item>
                          {({ active }) => (
                              <a
                                  href="#"
                                  className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                  )}
                                  onClick={(event: React.MouseEvent) => {
                                      event.preventDefault();
                                      alert('Copy link to clipboard');
                                  }}
                              >
                                  <div className="flex items-center">
                                      <FaLink className="mr-3" />
                                      <span>Copy Link</span>
                                  </div>
                              </a>
                          )}
                      </Menu.Item>
                      <Menu.Item>
                          {({ active }) => (
                              <a
                                  href="#"
                                  className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                  )}
                                  onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  alert('Share on Twitter');
                                  }}
                              >
                                  
                                  <div className="flex items-center">
                                      <FaTwitter className="mr-3" />
                                      <span>Share On Twitter</span>
                                  </div>
                              </a>
                          )}
                      </Menu.Item>
                      <Menu.Item>
                          {({ active }) => (
                              <a
                                  href="#"
                                  className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                  )}
                                  onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  alert('Share on Facebook');
                                  }}
                              >
                                  <div className="flex items-center">
                                      <FaFacebookF className="mr-3" />
                                      <span>Share on Facebook</span>
                                  </div>
                                  
                              </a>
                          )}
                      </Menu.Item>
                      <Menu.Item>
                          {({ active }) => (
                              <a
                                  href="#"
                                  className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block px-4 py-2 text-sm'
                                  )}
                                  onClick={(event: React.MouseEvent) => {
                                  event.preventDefault();
                                  alert('Share on LinkedIn');
                                  }}
                              >
                                  <div className="flex items-center">
                                      <FaLinkedinIn className="mr-3" />
                                      <span>Share on Linkedin</span>
                                  </div>
                              </a>
                          )}
                      </Menu.Item>
                  </div>
              </Menu.Items>
          </Transition>
      </Menu>
    )
  }