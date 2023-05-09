import { Meta } from './components/Meta';
import { AppConfig } from '../utils/AppConfig';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import type { ReactNode } from 'react';
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
    <div className="antialiased bg-gray-300">
        <Meta title={props?.title ?? AppConfig.title} description={props?.description ?? AppConfig.description} />
        <Navbar/>
        <main className="mx-auto max-w-5xl mt-16">{props.children}</main>
    </div>
);

export { Main };
