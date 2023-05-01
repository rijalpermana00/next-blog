import Link from 'next/link';
import Logo from '@components/partials/Logo';
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import SearchModal from './ModalSearch';

const Navbar = () => {
  
  const [searchModal, setSearchModal] = useState(false);
  
  return (
    <nav className="bg-white shadow relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <Logo/>
            </div>
            <ul className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
              <li className="pt-5 pb-5 border-b-2 hover:border-gray-300 border-transparent">
                <Link className="text-gray-1000 hover:text-gray-700 inline-flex items-center px-1 pt-1 font-medium" href="/">
                  Home
                </Link>
              </li>
              <li className="pt-5 pb-5 border-b-2 hover:border-gray-300 border-transparent">
                <Link className="text-gray-1000 hover:text-gray-700 inline-flex items-center px-1 pt-1 font-medium" href="/about">
                  About
                </Link>
              </li>
              <li className="pt-5 pb-5 border-b-2 hover:border-gray-300 relative group border-transparent">
                <a className="text-gray-1000 hover:text-gray-700 inline-flex items-center px-1 pt-1 font-medium cursor-pointer">
                  Dropdown
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </a>
                <ul className="absolute bg-white py-2 mt-1 rounded-md w-48 h-20 text-dark shadow-lg hidden group-hover:block md:block md:invisible md:group-hover:visible">
                  <li className="px-3 py-1 hover:text-blue-600 cursor-pointer">
                    <Link href="/page1">
                      Page xxxxxxxx1
                    </Link>
                  </li>
                  <li className="px-3 py-1 hover:text-blue-600 cursor-pointer">
                    <Link href="/page2">
                      Page 2
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex px-2 lg:px-0 items-center justify-center sm:items-stretch sm:justify-end">
            <div className="sm:block sm:ml-6">
              <div className="flex px-2 lg:px-0">
                <input id="nav-toggle" type="checkbox" className="hidden" />
                <label id="show-button" className="order-2 flex cursor-pointer items-center md:order-1 md:hidden">
                  <svg className="h-6 fill-current" viewBox="0 0 20 20">
                    <title>Menu Open</title>
                    <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
                  </svg>
                </label>
                <ul className="sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
                  <li className="pt-5 pb-5">
                    <div className="order-1 ml-auto md:order-2 md:ml-0">
                      <div
                        className="cursor-pointer p-2 text-xl text-dark hover:text-primary"
                        onClick={() => {
                          setSearchModal(true);
                        }}
                      >
                        <IoSearch />
                      </div>
                    </div>

                    <SearchModal
                      searchModal={searchModal}
                      setSearchModal={setSearchModal}
                    />
                    {/* <div className="relative hidden md:block">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Search icon</span>
                      </div>
                      <input type="text" id="search-navbar" className="block w-full p-1 pl-10 text-sm text-gray-600 border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500" placeholder="Search..."/>
                    </div> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
