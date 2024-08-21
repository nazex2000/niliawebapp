"use client";
import React, { useState, useEffect } from 'react';

export default function Testimonials() {
    const [current, setCurrent] = useState(0); // Initial slide index

    const testimonials = [
        {
            text: 'O Instituto Nília é uma escola incrível! Meu filho adora as aulas e os professores são muito atenciosos.',
            author: 'Maria Silva',
        },
        {
            text: 'Estou muito satisfeito com o progresso do meu filho. O Instituto Nília é uma escola de excelência.',
            author: 'João Santos',
        },
        {
            text: 'O Instituto Nília oferece uma educação de qualidade e um ambiente acolhedor. Recomendo!',
            author: 'Ana Oliveira',
        },
        {
            text: 'Meu filho adora as aulas de matemática! O Instituto Nília é uma escola de excelência.',
            author: 'Pedro Almeida',
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
                                <p className="nilia-text-s text-italic text-center"> {testimonial.text}</p>
                                <p className="nilia-title-ms">{testimonial.author}</p>
                                <p className="nilia-text-s">Encarregada de Educação</p>
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
