"use client";
import { useState } from "react";
import '../css/section.css';
import { MdBook } from "react-icons/md";
import Image from "next/image";
import nilia_kids_1 from "../../assets/images/nilia-kids-5.webp";

export default function PrimaryClasses() {
    const [selectedClass, setSelectedClass] = useState(0);

    const classes = [
        {
            title: "1ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Educação Física",
                "Dança",
                "Música",
                "Jogos Sociais",
            ]
        },
        {
            title: "2ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Educação Física",
                "Dança",
                "Música",
                "Jogos Sociais",
            ]
        },
        {
            title: "3ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Educação Física",
                "Dança",
                "Música",
                "Jogos Sociais",
            ]
        },
        {
            title: "4ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Ciências Sociais",
                "Ciências Naturais",
                "Educação Física",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "5ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Ciências Sociais",
                "Ciências Naturais",
                "Ed. Visual e Ofícios",
                "Educação Física",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "6ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Matemática",
                "Inglês",
                "Ciências Sociais",
                "Ciências Naturais",
                "Ed. Visual e Ofícios",
                "Educação Física",
                "Informática",
                "Xadrez",
            ]
        }
    ]

    return (<>
        <div className='flex flex-row gap-2 items-start grid grid-cols-4 sm:grid-cols-6'>
            {classes.map((classe, index) => (
                <div key={index} className={`class-selector ${selectedClass === index ? 'selected' : ''}`} onClick={() => setSelectedClass(index)}>
                    {classe.title}
                </div>
            ))}
        </div>
        <div className='flex flex-row gap-2 mt-4'>
            <div className="w-full sm:w-2/3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{height: 'fit-content'}}>
                {classes[selectedClass].subjects.map((subject, index) => (
                    <div key={index} className='w-full flex flex-row gap-2 items-center'>
                        <MdBook className='icon' size={25} color='#10374F' />
                        <p className='nilia-text-ms'>{subject}</p>
                    </div>
                ))}
            </div>
            <div className=' w-1/3 hidden sm:flex flex-col gap-2'>
                <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image h-full' />
            </div>
        </div>
    </>)
}