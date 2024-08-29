"use client";
import { useState } from "react";
import '../css/section.css';
import { MdBook } from "react-icons/md";
import Image from "next/image";
import nilia_kids_1 from "../../assets/images/nilia-kids-4.webp";

export default function SecundaryClasses() {
    const [selectedClass, setSelectedClass] = useState(0);

    const classes = [
        {
            title: "8ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Inglês",
                "Geografia",
                "História",
                "Matemática",
                "Biologia",
                "Física",
                "Química",
                "Educação Física",
                "Educação Visual",
                "Agro-Pecuária",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "9ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Inglês",
                "Geografia",
                "História",
                "Matemática",
                "Biologia",
                "Física",
                "Química",
                "Educação Física",
                "Educação Visual",
                "Noções de Empreendedorismo",
                "Agro-Pecuária",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "10ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Inglês",
                "Geografia",
                "História",
                "Matemática",
                "Biologia",
                "Física",
                "Química",
                "Educação Física",
                "Educação Visual",
                "Noções de Empreendedorismo",
                "Agro-Pecuária",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "11ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Inglês",
                "Introdução a Filosofia",
                "Matemática",
                "Educação Física",
                "Geografia (A e B)",
                "História (A e B)",
                "Francês (A)",
                "Biologia (B)",
                "Física (B)",
                "Química (B)",
                "Educação Visual (C)",
                "Artes Cénicas (C)",
                "Desenho e Geometria Descritiva (C)",
                "Informática",
                "Xadrez",
            ]
        },
        {
            title: "12ª Classe",
            subjects: [
                "Língua Portuguesa",
                "Inglês",
                "Introdução a Filosofia",
                "Matemática",
                "Educação Física",
                "Geografia (A e B)",
                "História (A e B)",
                "Francês (A)",
                "Biologia (B)",
                "Física (B)",
                "Química (B)",
                "Educação Visual (C)",
                "Artes Cénicas (C)",
                "Desenho e Geometria Descritiva (C)",
                "Informática",
                "Xadrez",
            ]
        },
    ]

    return (<>
        <div className='flex flex-row gap-2 grid grid-cols-4 sm:grid-cols-6 items-start'>
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
                        <MdBook className="min-w-[20px]" size={25} color='#10374F' />
                        <p className='nilia-text-ms'>{subject}</p>
                    </div>
                ))}
            </div>
            <div className=' hidden sm:flex  w-1/3 flex flex-col gap-2'>
                <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image h-full' />
            </div>
        </div>
    </>)
}