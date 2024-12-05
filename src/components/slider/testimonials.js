"use client";
import React, { useState, useEffect } from 'react';

export default function Testimonials() {
    const [current, setCurrent] = useState(0); // Initial slide index

    const testimonials = [
        {
            text: 'Ser aluna do Instituto Nília transformou a minha vida, proporcionando aprendizagens incríveis que impactaram tanto a minha trajetória académica quanto a minha vida profissional.',
            author: 'Monica Amargar',
            role: 'Ex-aluna (1999 – 2008)',
        },
        {
            text: 'Falar do Instituto Nilia hoje, é voltar a um passado maravilhoso em que tive uma educação centrada no desenvolvimento da criança, sem distinção de raça, etnia e condição física, o Nilia foi uma segunda casa para mim.',
            author: 'Vanessa Adamgee',
            role: 'Ex-aluna (2003 – 2007)',
        },
        {
            text: 'Sou profundamente grato ao Instituto Nília, que foi a base da minha formação académica e do profissional que sou hoje. Sem dúvida, as minhas crianças também irão para o Instituto Nília.',
            author: 'Renato Dombo',
            role: 'Ex-aluno (1997 – 2007)',
        },
    ];
    

    // Go to the next slide
    const nextSlide = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer); // Clear timer on component unmount
    }, [current]);

    if (!Array.isArray(testimonials) || testimonials.length <= 0) {
        return null;
    }

    return (
        <section>
            {testimonials.map((testimonial, index) => {
                return (
                    <div
                        className={'flex '+index === current ? 'slide-testimonial active' : 'slide-testimonial'}
                        key={index}
                    >
                        {index === current && (
                            <div className="flex flex-col items-center justify-center gap-4">
                                <p className="nilia-text-s text-italic text-center flex items-center" style={{textAlign:'center', minHeight:'120px'}}> {testimonial.text}</p>
                                <p className="nilia-title-ms">{testimonial.author}</p>
                                <p className="nilia-text-s">{testimonial.role}</p>
                                <div className="flex flex-row items-center justify-center gap-2">
                                    <div className="dot-orange"></div>
                                    <div className="dot-orange"></div>
                                    <div className="dot-orange"></div>
                                </div>
                            </div>
                        )}
                    </div>

                );
            })}
        </section>
    );
};
