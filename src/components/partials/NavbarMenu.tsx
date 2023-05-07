import { useRouter } from "next/router"

type MenuProps = {
    title : string
    url?: string
    classNames?: string | undefined
    preIcon?: string | undefined
    postIcon?: string | undefined
    active?: boolean
}

export const NavbarMenu = (props:MenuProps) => {
    
    const router = useRouter();
    const pathname = router.pathname;
    console.log(props.url);
    
    return (
        <li className={`sm:pt-5 pt-3 sm:pb-5 pb-3 sm:border-b-2 hover:border-gray-800 border-transparent ${pathname === props.url ? 'border-gray-800' : ''}`}>
            <a className={`${pathname === props.url ? 'text-gray-900' : 'text-gray-500'} hover:text-gray-900 inline-flex items-center px-1 pt-1 font-bold`} href={props?.url ?? '#'}>
                {props.title}
            </a>
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