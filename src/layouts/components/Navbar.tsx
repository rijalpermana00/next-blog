import React, { useEffect, useState } from "react";
import Logo from "@/components/partials/Logo";
import menu from "@/config/menu.json"
import { NavbarButton, NavbarMenu } from "@/components/partials/NavbarMenu";
import Search from "./Modal";
import router from "next/router";
import { ThemeProps } from "@/props/ThemeProps";
import { useTheme } from "next-themes";
// components

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [currentTheme, setCurrentTheme] = useState<string>('');
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const menus = menu.main;
    
    const menuIcon = navbarOpen ? (
        <svg className="h-6 fill-current menu-icon dark:text-white text-gray-800" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
            />
        </svg>
    ) : (
        <svg className="h-6 fill-current menu-icon active dark:text-white text-gray-800" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
        </svg>
    );
    
    useEffect(() => {
        const handleRouteChange = () => {
            setNavbarOpen(false);
        };
    
        router.events.on('routeChangeComplete', handleRouteChange);

    }, [router]);
    
    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setIsTransparent(!isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    useEffect(() => {
        setMounted(true);
        
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsTransparent(!isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!mounted) {
        return null;
    }
    
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme)
    };
    
    return (
        <nav className={`fixed top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 md:px-2 md:py-6 sm:px-0 sm:py-0 lg:px-0 lg:py-0 navbar-expand-lg bg-white dark:bg-night opacity-95 shadow`}>
            <div className="container px-4 py-4 mx-auto flex flex-wrap items-center justify-between max-w-7xl sm:px-6 lg:px-8 sm:py-1 lg:py-0">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Logo/>
                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {menuIcon}
                    </button>
                </div>
                <div
                    className={
                    "lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none" +
                    (navbarOpen ? " block" : " hidden")
                    }
                    id="example-navbar-warning"
                >
                    <ul className="sm:pt-0 pt-3 sm:-my-px sm:ml-6 sm:space-x-0 md:space-x-0 lg:space-x-4 md:ml-0 sm:flex flex flex-col lg:flex-row list-none items-center">
                        {menus.map((menu, index) => (
                            <NavbarMenu  title={menu.name} slug={menu.slug} url={menu.url} key={index}/>
                        ))}
                    </ul>
                    <ul className="sm:pt-0 pt-3 sm:-my-px sm:flex flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                        <li className="sm:pt-0 pt-3 sm:pb-0 md:pb-3 lg:pb-0 pb-3">
                            <Search setSearch={false}/>
                        </li>
                        {/* <li className="sm:pt-0 pt-3 sm:pb-0 pb-3 hover:border-gray-800 border-transparent">
                            <NavbarButton title="Log In" url="/login" classNames="bg-gray-500 text-white hover:bg-gray-900"/>
                        </li> */}
                        <button 
                            type="button" 
                            aria-label="Color Mode" 
                            onClick={toggleTheme}
                            className="flex justify-center p-2 w-[60%] sm:w-10 ml-0 md:w-[25%] lg:w-10 sm:ml-0 md:ml-0 lg:ml-3 text-gray-500 transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
                        >
                            {theme === 'dark' ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                                >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                                </svg>
                            ) : (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5 transform -rotate-90"
                                >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                            )}
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
