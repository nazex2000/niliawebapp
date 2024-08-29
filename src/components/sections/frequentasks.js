"use client";
import { useState } from "react";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import idea_icon from '../../assets/icons/idea.png';
import Image from "next/image";

export default function FrequentAsks() {
    const [selected, setSelected] = useState(null);

    const [asks, setAsks] = useState([
        {
            question: 'Dispõe de serviços de transporte de e para a escola?',
            answer: 'Sim, dispomos de transporte de e para a escola. O transporte é feito por motoristas profissionais e responsáveis.'
        },
        {
            question: 'Qual é o processo de inscrição no Instituto Nília?',
            answer: <>O processo de inscrição no Instituto Nília é simples. Para mais informações, clique <a className="font-orange" href='/admissoes'>aqui</a> para obter todos passos de como proceder.</>
            
        },
        {
            question: 'Quais são os custos associados?',
            answer: <>Os custos associados variam consoante o nível de ensino e o número de disciplinas. Para mais informações, clique <a className="font-orange" href='/admissoes#precario'>aqui</a></>        },
        {
            question: 'Em que línguas é o ensino no Instituto Nília?',
            answer: 'O ensino no Instituto Nília é ministrado em Português e Inglês. Os alunos têm a possibilidade de frequentar aulas de reforço em outras línguas.'
        }
    ]);


    return (
        <section className='nilia-section bg-nilia-standard'>
            <div className='nilia-container'>
                <Image src={idea_icon} alt='Perguntas Frequentes' className='ask-icon hidden sm:flex' />
                <div className=' w-full flex flex-col gap-8 items-center justify-center ask-container'>
                    <p className='nilia-title-ms sm:nilia-title-ls'>Perguntas Frequentes</p>
                    
                    <div className='grid grid-cols-1 gap-4'>
                        {asks.map((ask, index) => (
                            <div key={index} className='w-full flex flex-col sm:items-center gap-2'>
                                <div className='flex flex-row justify-start items-center gap-2 cursor-pointer' onClick={() => setSelected(selected === index ? null : index)}>
                                    {selected === index ? <MdExpandLess size={30}/> : <MdExpandMore size={30} />}
                                    <p className='nilia-text-s sm:nilia-text-ms'>{ask.question}</p>
                                </div>
                                {selected === index && <div className="ask-card"><p className='nilia-text-s'>{ask.answer}</p></div>}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}