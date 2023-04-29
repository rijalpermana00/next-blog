import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link className="text-xl font-bold text-white uppercase" href="/">
                My Website
            </Link>
            <ul className="hidden md:flex md:ml-4">
              <li className="ml-4">
                <Link className="text-gray-300 hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li className="ml-4">
                <Link className="text-gray-300 hover:text-white" href="/about">
                  About
                </Link>
              </li>
              <li className="ml-4 relative">
                <a className="text-gray-300 hover:text-white cursor-pointer">
                  Dropdown
                </a>
                <ul className="absolute bg-gray-700 py-2 mt-1 rounded-md w-32 text-white shadow-lg">
                  <li className="px-3 py-1 hover:bg-gray-600 cursor-pointer">
                    <Link href="/page1">
                      Page 1
                    </Link>
                  </li>
                  <li className="px-3 py-1 hover:bg-gray-600 cursor-pointer">
                    <Link href="/page2">
                      Page 2
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <Link className="text-gray-300 hover:text-white mr-4" href="/login">
              Login
            </Link>
            <Link className="text-gray-300 hover:text-white mr-4" href="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
