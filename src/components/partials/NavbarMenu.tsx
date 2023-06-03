import {usePathname} from 'next/navigation';
import Link from "next/link";

type MenuProps = {
    title : string
    url?: string
    classNames?: string | undefined
    preIcon?: string | undefined
    postIcon?: string | undefined
    active?: boolean
}

export const NavbarMenu = (props:MenuProps) => {
    
    const pathname = usePathname();

    return (
        <li className={`sm:pt-5 pt-3 sm:pb-5 pb-3 sm:border-b-2 hover:border-gray-800 hover:dark:border-gray-300 ${pathname === props.url ? 'border-gray-800 dark:border-gray-200' : 'border-transparent'}`}>
            <Link 
                className={`${pathname === props.url ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-300'} hover:text-gray-900 hover:dark:text-white inline-flex items-center px-1 pt-1 font-bold`} 
                href={props?.url ?? '#'}
            >
                {props.title}
            </Link>
        </li>
    )
}

export const NavbarButton = (props:MenuProps) => {
    return (
        <a 
            href={props.url}
            className={`font-bold px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150 ${props.classNames}`}
            type="button"
        >
            {props.title}
        </a>
    )
    
}