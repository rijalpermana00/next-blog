import React, { Component } from 'react'
import Slider from "react-slick"
// import './css/Gallery.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Skeleton from './Skeleton'

export function Carousel(){

    return(
        <div className="sm:flex sm:items-center sm:justify-center">
            <div className="max-w-7xl sm:p-6 p-8 mt-8">
                <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                <div className="col-12">
                    <Slider className="baguetter" {...settings}>
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    <Skeleton className="h-[250px] w-[250px] m-5" />
                    </Slider>
                </div>
                </div>
            </div>
        </div>
    )
}

var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 400,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
        {
        breakpoint: 900,
        settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    },
        {
        breakpoint: 1025,
        settings: {
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }]
};