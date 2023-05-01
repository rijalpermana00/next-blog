import Link from 'next/link';
import Logo from '../../components/partials/Logo';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex px-2 lg:px-0">
            <div className="flex-shrink-0 flex items-center">
              <Logo/>
            </div>
            <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-4'>
              <Link href="/" className="border-transparent text-gray-1000 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 font-medium">
                Dashboard
              </Link>
              <Link href="/about" className='border-transparent text-gray-1000 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 font-medium'>
                About
              </Link>
              <li className="nav-item nav-dropdown relative group border-transparent text-gray-1000 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 font-medium">
                <a
                  href="#"
                  className="inline-flex items-center nav-link"
                >
                  Dropdown
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </a>
                <ul className="absolute z-10 hidden group-hover:block md:block md:invisible md:group-hover:visible">
                  <li className="nav-dropdown-item">
                    <Link href="/solace" className="nav-dropdown-link">
                      Anak Anak
                    </Link>
                  </li>
                  <li className="nav-dropdown-item">
                    <Link href="/solace" className="nav-dropdown-link">
                      Anak Anak
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/services" className='px-3 py-2 text-gray-1000 hover:text-gray-900'>
                  Services
                </Link>
                <Link href="/contact" className='px-3 py-2 text-gray-1000 hover:text-gray-900'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
