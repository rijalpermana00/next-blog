import { Meta } from './components/Meta';
import { AppConfig } from '../utils/AppConfig';
import Navbar from './components/Navbar';
import type { ReactNode } from 'react';
import Footer from './components/Footer';

type IMainProps = {
    title?: string,
    description?: string,
    children: ReactNode;
    canonical?: string;
};
  
const Main = (props: IMainProps) => (
    // <div className="antialiased bg-gray-200">
    <div className="antialiased">
        <Meta title={props?.title ?? AppConfig.title} description={props?.description ?? AppConfig.description} canonical={props?.canonical}/>
        <Navbar/>
        <div className="h-[68px]"/>
        <main className="mx-auto my-10 md:my-0 sm:my-16 lg:my-16">
            {props.children}
        </main>
        <Footer/>
    </div>
);

export { Main };
