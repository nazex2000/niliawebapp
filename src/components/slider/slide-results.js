"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import nilia_certificado from '../../assets/images/certificado.jpg';
import nilia_grafico from '../../assets/images/graph.jpg';

const ResultSlider = () => {
    const images = [nilia_certificado, nilia_grafico];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div style={{  width: '100%', height: '600px' }} className='flex justify-center items-center specialMob'>
            <Image
                src={images[currentIndex]}
                alt='Os Resultados falam por nós no instituto nília'
                className='nilia-container-image'
            />
        </div>
    );
};

export default ResultSlider;