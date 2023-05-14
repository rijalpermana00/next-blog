import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { FaFacebookF, FaLink, FaLinkedinIn, FaShareAlt, FaTwitter } from 'react-icons/fa';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
        <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-full bg-gray-100 p-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-100 hover:bg-gray-50">
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
