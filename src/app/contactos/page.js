import NiliaNav from '@/components/sections/nilanav';
import Head from 'next/head';
import nilia_place from '../../assets/images/cnt.webp';
import facebook_icon from '../../assets/icons/facebook.png';
import { MdFacebook, MdLocationPin, MdMail, MdPhone } from 'react-icons/md';

//Styles import
import '../../components/css/main.css';
import '../../components/css/button.css';
import Image from 'next/image';
import GoogleAnalytics from '@/components/GoogleAnalytics';


export const metadata = {
    title: "Instituto Nilia | Contactos",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Contactos</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta property="og:description" content="Conheça o processo de admissão no Instituto Nilia." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilia_place} title={"Contactos"} text={"O sucesso do seu filho começa aqui."} />
            <section className="nilia-section bg-nilia-standard">
                <div className='nilia-container flex-col md:flex-row bg-[#10374F]' style={{padding: '0'}} >
                    <div className='w-full md:w-1/2 p-8 gap-3 flex flex-col bg-[white]'>
                        <p className='nilia-title-m'>Unidade Tivane</p>
                        <p className='nilia-text-s'>Ensino Pré-escolar (5 anos) e Primário1 nível (1-3a Classes) e Sede Administrativa</p>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdLocationPin size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>Av. Armando Tivane, 1581, Maputo</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdPhone size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>+258 82 30 37 946 || +258 87 30 37 946</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdMail size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>secretaria@institutonilia.edu.mz</p>
                        </div>
                        <p className='nilia-title-m mt-2'>Unidade Magumbwé</p>
                        <p className='nilia-text-s'>Turno da manhã: da 4ª à 6a (EP 2o nivel) e 7a  Classes (ESG) <br />Turno da Tarde:  ESG da 8a à 12ª  Classes</p>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdLocationPin size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>Av. F. Orlando Magumbwe, 837 Maputo</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdPhone size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>+258 86 93 32 344</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <MdMail size={25} color='#ff812e'/>
                            <p className='nilia-text-s'>administracao@institutonilia.edu.mz</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 p-8 flex flex-col mb-auto' style={{minHeight: '100%'}}>
                        <p className='nilia-title-m font-white'>Envie-nos uma mensagem</p>
                        <form className='flex flex-col gap-3 mt-4'>
                            <input type='text' placeholder='Nome' className='nilia-input' />
                            <input type='email' placeholder='Email' className='nilia-input' />
                            <input type='text' placeholder='Assunto' className='nilia-input' />
                            <textarea placeholder='Mensagem' className='nilia-input' />
                            <button className='nilia-button'>Enviar</button>
                        </form>
                        <div className='flex flex-row gap-2 mt-8'>
                            <MdFacebook size={30} color='#ff812e'/>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}