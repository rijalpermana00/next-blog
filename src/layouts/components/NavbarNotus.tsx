import React, { useEffect, useState } from "react";
import Logo from "@/components/partials/Logo";
import menu from "@/config/menu.json"
import { NavbarButton, NavbarMenu } from "@/components/partials/NavbarMenu";
import ModalSearch from "./ModalSearch";
import router from "next/router";
// components

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    
    const menus = menu.main;
    
    const menuIcon = navbarOpen ? (
        <svg className="h-6 fill-current menu-icon" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
            />
        </svg>
    ) : (
        <svg className="h-6 fill-current menu-icon active" viewBox="0 0 20 20">
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
    
    
    return (
        <nav className="fixed top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 sm:px-0 sm:py-0 navbar-expand-lg bg-white shadow">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between max-w-7xl sm:px-6 lg:px-8">
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
                "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                (navbarOpen ? " block" : " hidden")
                }
                id="example-navbar-warning"
            >
                <ul className="sm:pt-0 pt-3 sm:-my-px sm:ml-6 sm:flex sm:space-x-4 flex flex-col lg:flex-row list-none items-center">
                    {menus.map((menu, index) => (
                        <NavbarMenu  title={menu.name} url={menu.url} key={index}/>
                    ))}
                </ul>
                <ul className="sm:pt-0 pt-3 sm:-my-px sm:flex sm:space-x-4 flex flex-col lg:flex-row list-none lg:ml-auto items-center">
                    <li className="sm:pt-0 pt-3 sm:pb-0 pb-3 sm:border-b-2 hover:border-gray-800 border-transparent">
                        <ModalSearch setSearchModal={false}/>
                    </li>
                    <li className="sm:pt-0 pt-3 sm:pb-0 pb-3 sm:border-b-2 hover:border-gray-800 border-transparent">
                        <NavbarButton title="Log In" url="/login" classNames="bg-gray-500 text-white hover:bg-gray-900"/>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}