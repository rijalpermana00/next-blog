import { Meta } from './components/Meta';
import { AppConfig } from '../utils/AppConfig';
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
    <div className="antialiased text-gray-600">
        <Meta title={props?.title ?? AppConfig.title} description={props?.description ?? AppConfig.description} />
        <Navbar/>
        <main className="p-4 md:p-10 mx-auto max-w-5xl">{props.children}</main>
    </div>
);

export { Main };
