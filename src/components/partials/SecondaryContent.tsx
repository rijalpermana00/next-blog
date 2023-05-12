import post from '@/config/post.json'
import { SecondDesign } from '@/components/partials/BlogPost';
import { ReactNode } from 'react';

type props = {
    bgColor?: 'bg-black' | 'bg-white' ,
    title: string,
    children: ReactNode;
    maxWidth?: 'max-w-5xl' | 'max-w-7xl' | 'max-w-full' | undefined
}

export const SecondaryContent = ({
    bgColor,
    title,
    children,
    maxWidth
}:props) => {
  
    return (
        <div className={`px-4 py-3 sm:px-10 sm:py-4 mx-auto ${bgColor ?? 'bg-white'} ${maxWidth ?? ''}`}>
            <h3 className={`text-3xl font-bold text-left pb-3 ${bgColor === 'bg-black' ? 'text-white' : 'text-gray-500'}`}>
                <a className="block hover:text-primary" href="/post-1">
                    {title}
                </a>
                <hr/>
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                {children}
            </div>
        </div>
    );
}
