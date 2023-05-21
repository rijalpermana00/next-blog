

export default function Footer(){
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800 bottom-0 left-0 w-full">
            {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
            {/* <div className="sm:flex sm:items-center sm:justify-center mb-5">
                <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                    </li>
                </ul>
            </div> */}
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023 <a href="https://iam-rijal.netlify.app" target="_blank" className="hover:underline">Sani Asmi - Truegrey</a>
                <br/> 
                All Rights Reserved 
            </span>
        </footer>

    )
}