"use client";
import Image from "next/image";
import nilia_kids from '../../assets/images/nilia-scroll-3.webp';
import NiliaButton from "../buttons/button";
export default function VisitNilia (){
    return (
        <section className='nilia-section no-pd'>
            <Image src={nilia_kids} alt='Visite o Instituto Nília?' className='visit-bg-image' />
            <div className='visit-container'>
                <div className="nilia-container">
                    <div className="w-full flex flex-col justify-center gap-2">
                        <p className="nilia-title-s">Instituto Nília</p>
                        <p className="nilia-title-ls md:nilia-title-l">
                            A <span className="font-orange"> educação</span> é o <br />seu melhor <br /><span className="font-orange">investimento</span>
                        </p>
                        <NiliaButton text='Visite-nos' onClick={() => window.location.href = "/contactos"} />
                    </div>
                </div>
            </div>
        </section>
    );
}