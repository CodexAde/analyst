"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Arjun Mehta",
        profession: 'Portfolio Manager',
        comment: 'Ramanti Capitals has completely transformed my approach to the Indian stock market. Their SEBI-certified research is unparalleled and consistently accurate.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Priya Sharma",
        profession: 'Retail Investor',
        comment: 'I was hesitant about equity, but the detailed analysis and guidance from Ramanti Capitals helped me build a robust portfolio with sustainable returns.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Vikram Singh",
        profession: 'HNI Client',
        comment: 'As a high net-worth individual, I value precision. The capital growth strategies provided here are data-driven and tailored for long-term wealth creation.',
        imgSrc: '/images/testimonial/user3.svg',
    },
    {
        name: "Ananya Iyer",
        profession: 'Financial Planner',
        comment: 'The transparency and depth of their market research reports are what make Ramanti Capitals stand out in the crowded financial services space.',
        imgSrc: '/images/testimonial/user1.svg',
    },
    {
        name: "Rahul Verma",
        profession: 'Corporate Professional',
        comment: 'Highly recommended for anyone looking for reliable stock market calls and professional wealth advisory. Truly a SEBI class research house.',
        imgSrc: '/images/testimonial/user2.svg',
    },
    {
        name: "Sanjay Gupta",
        profession: 'Business Owner',
        comment: 'Their expert analysis has been pivotal in managing my capital during volatile market phases. Ramanti Capitals is a name you can trust.',
        imgSrc: '/images/testimonial/user3.svg',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32 overflow-hidden" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 my-4">See what others are saying.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{items.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                            <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
