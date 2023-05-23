import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
import { SplideCard } from './Card';
import { splideProps } from '@/props/SplideProps';
import { CategoryInfos } from '@/props/CategoriesProps';


export const Splides = ({data}:CategoryInfos) => {
    return(
        <div className='max-w-6xl sm:p-6 p-4 my-10 flex-row flex-wrap mx-auto justify-center'>
            <Splide 
                aria-label="My Favorite Images"
                options={{
                    perPage:4,
                    breakpoints: {
                        639:{
                            perPage:1,
                        },
                        1023:{
                            perPage:2,
                        },
                        1279:{
                            perPage:2,
                        },
                        1535:{
                            perPage:4,
                        },
                        1536:{
                            perPage:4,
                        },
                    },
                    cover:true,
                    gap:'1rem'
                }}
            >
                {data?.map((item, index) => (
                    <SplideSlide key={index}>
                        <SplideCard 
                            title={item.categoryName}
                            total={item.count}
                            slug={item.slug}
                            image={item?.image}
                        />
                    </SplideSlide>
                ))}
                
            </Splide>
        </div>
        
    )
}