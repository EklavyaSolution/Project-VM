import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import numero_sol1 from "@/assets/numero_sol1.svg"

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import swipePrev from "@/assets/swipePrev.svg"
import swipeNext from "@/assets/swipeNext.svg"


function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-10 h-10 hover:bg-[#dedede] bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 -right-5 min-[840px]:-right-12 min-[1280px]:-right-20 translate-y-[-50%] z-10"
            onClick={onClick}
        >
            <Image src={swipeNext} alt='Next' className='w-3 ml-1' />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-10 h-10 hover:bg-[#dedede] bg-[#FFFBF6] rounded-full grid place-items-center cursor-pointer absolute top-1/2 -left-5 min-[840px]:-left-12 min-[1280px]:-left-20 translate-y-[-50%] z-10"
            onClick={onClick}
        >
            <Image src={swipePrev} alt='Next' className='w-3 -ml-1' />
        </div>
    );
}

function SimpleSlider({ data, slides, auto }) {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        lazyLoad: true,
        autoplaySpeed: 5000,
        speed: 700,
        pauseOnHover: true,
        slidesToShow: slides,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: slides - 1,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings} className="w-[87%] min-[1280px]:w-[85%] max-w-[1200px] mx-auto">
            {data}
        </Slider>
    );
}

export default SimpleSlider;