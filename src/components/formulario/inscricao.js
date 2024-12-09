"use client";
import React, { useState, useEffect } from 'react';

import "../css/form.css";
import Image from 'next/image';
import nilia_kids from "../../assets/images/nilia-kids-1.webp";
import NiliaButton from '../buttons/button';

export default function FormularioInscricao() {
    const [current, setCurrent] = useState(0);

    const handleMenu = (pageNum) => {
        setCurrent(pageNum);
    };

    return (
        <section className='form-page'>
            <div className='form-steps-container'>
                <div className={`form-step ${current >= 0 ? 'form-step-active' : ''}`} onClick={() => handleMenu(0)}>
                    <p className={`form-step-text ${current >= 0 ? 'active' : ''}`}>
                        Bem Vindo
                    </p>
                </div>
                <div className={`form-step-line ${current > 0 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 1 ? 'form-step-active' : ''}`} onClick={() => handleMenu(1)}>
                    <p className={`form-step-text ${current >= 1 ? 'active' : ''}`}>Dados de Identificação</p>
                </div>
                <div className={`form-step-line ${current > 1 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 2 ? 'form-step-active' : ''}`} onClick={() => handleMenu(2)}>
                    <p className={`form-step-text ${current >= 2 ? 'active' : ''}`}>Histórico Académico</p>
                </div>
                <div className={`form-step-line ${current > 2 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 3 ? 'form-step-active' : ''}`} onClick={() => handleMenu(3)}>
                    <p className={`form-step-text ${current >= 3 ? 'active' : ''}`}>Informação Adicional</p>
                </div>
            </div>
            {current === 0 && (
                <>
                    <div className='w-full flex flex-col sm:flex-row gap-8 form-border'>
                        <div className='w-full sm:w-1/3'>
                            <div className='form-image'>
                                <Image src={nilia_kids} alt="Instituto Nilia" className='form-image-home' />
                            </div>
                        </div>
                        <div className='w-full sm:w-2/3 flex flex-col gap-3'>
                            <p className='nilia-title-mss'>
                                Caro Encarregado(a), obrigado por considerar o Instituto Nília
                                para a educação do seu educando
                            </p>
                            <p className='nilia-text-s'>
                                Estamos muito felizes por você considerar o Instituto Nília como parte importante da jornada educacional do seu filho(a). Aqui, oferecemos um ambiente acolhedor e seguro, que promove o desenvolvimento acadêmico, social e emocional dos nossos alunos.
                            </p>
                            <p className='nilia-text-s'>
                                Nesta página, você poderá submeter a inscrição para as
                                diferentes modalidades de ensino oferecidas, desde o pré-escolar (5 anos)
                                até o ensino secundário. Basta preencher o formulário com as
                                informações solicitadas e seguir os passos indicados.
                            </p>
                            <div className='ml-auto mt-6'>
                                <NiliaButton text='Iniciar Inscrição' />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};
