import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
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
            <div className="hidden sm:block sm:ml-6">
              <div className="flex px-2 lg:px-0">
                <ul className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4">
                  <li className="pt-5 pb-5 border-b-2 hover:border-gray-300 border-transparent">
                    <Link className="text-gray-1000 hover:text-gray-700 inline-flex items-center px-1 pt-1 font-medium" href="/">
                      Log in
                    </Link>
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
