import { Meta } from './components/Meta';
import { AppConfig } from '../utils/AppConfig';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import type { ReactNode } from 'react';
import Footer from './components/Footer';
// import { Banner } from './Banner';
// import { Footer } from './Footer';
// import { Hero } from './Hero';
// import { VerticalFeatures } from './VerticalFeatures';

type IMainProps = {
    title?: string,
    description?: string,
    children: ReactNode;
};
  
const Main = (props: IMainProps) => (
    // <div className="antialiased bg-gray-200">
    <div className="antialiased">
        <Meta title={props?.title ?? AppConfig.title} description={props?.description ?? AppConfig.description} />
        <Navbar/>
        <div className="h-[68px]"/>
        <main className="mx-auto my-0 md:my-0 sm:my-16 lg:my-16">
            {props.children}
        </main>
        <Footer/>
    </div>
);

export { Main };
