"use client";
import React, { useState, useEffect } from 'react';
import './carrousel.css'; // Assuming you have a CSS file named Carousel.css
import Image from 'next/image';
import { MdArrowBack, MdArrowCircleLeft, MdArrowRight, MdChevronLeft, MdChevronRight } from 'react-icons/md';
import '../css/text.css';
import NiliaButton from '../buttons/button';

const Carousel = ({ data }) => {
    const [current, setCurrent] = useState(0); // Initial image index

    // Go to the next image
    const nextSlide = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };

    // Go to the previous image
    const prevSlide = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer); // Clear timer on component unmount
    }, [current]);

    return (
        <section className='carousel'>
            {data.map((image, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <Image
                                src={image.image}
                                alt='carousel image'
                                className='image-carousel'
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
                                priority
                                loading='eager'
                            />
                        )}
                    </div>
                );
            })}
            <div className='carousel-buttons hidden sm:flex'>
                <MdChevronLeft size={50} className='left-arrow' onClick={prevSlide} />
                <MdChevronRight size={50} className='right-arrow' onClick={nextSlide} />
            </div>
            <div className='carousel-content'>
                <div className='carousel-inner'>
                    <p className='carousel-title-s sm:carousel-title mb-4'>Admissões para <span className='font-orange'>2025</span> <br /> Abertas</p>
                    <NiliaButton text='Mais Informações' onClick={() => window.location.href = '/admissoes'} />
                </div>

            </div>

        </section>
    );
};

export default Carousel;