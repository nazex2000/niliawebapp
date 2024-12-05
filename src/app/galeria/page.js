import NiliaNav from '@/components/sections/nilanav';
import Head from 'next/head';
import nilia_place from '../../assets/images/galeria.jpg';

//Styles import
import '../../components/css/main.css';
import '../../components/css/button.css';
import Image from 'next/image';
import GoogleAnalytics from '@/components/GoogleAnalytics';

//image folder


export const metadata = {
    title: "Instituto Nilia | Galeria",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Galeria</title>
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
            <NiliaNav imageBg={nilia_place} title={"Galeria"} text={"Descubra o que acontece no Instituto Nilia."} />
            <section className="nilia-section">
                <div className='nilia-container flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                        <p className='nilia-title-l font-orange'>AS NOSSAS INSTALAÇÕES</p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
                        <p className='nilia-text-s '>O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.</p>
                        <div className='line-bottom'></div>
                    </div>
                </div>
                <div className='nilia-container'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5'>
                        <img src="/galeria/insittuicao/biblioteca-3.jpg" alt="Instituto Nilia | Biblioteca" className='galleryimage' />
                        <img src="/galeria/insittuicao/sala-de-informatica-2.jpg" alt="Instituto Nilia | Sala de Informática" className='galleryimage' />
                        <img src="/galeria/insittuicao/laboratorio-1.jpg" alt="Instituto Nilia | Laboratório" className='galleryimage' />
                        <img src="/galeria/insittuicao/laboratorio-2.jpg" alt="Instituto Nilia | Laboratório" className='galleryimage' />
                        <img src="/galeria/insittuicao/campo-3.jpg" alt="Instituto Nilia | Campo Desportivo" className='galleryimage' />
                        <img src="/galeria/insittuicao/patio-2.jpg" alt="Instituto Nilia | Pátio" className='galleryimage' />
                    </div>
                </div>
            </section>
            <section className="nilia-section" style={{ paddingTop: 0 }}>
                <div className='nilia-container flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                        <p className='nilia-title-l font-orange'>Dia da Água</p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
                        <p className='nilia-text-s '>No Instituto Nilia, celebramos o Dia Mundial da Água com atividades educactivas e recreactivas que promovem a consciencialização sobre a importância da água para a vida no planeta.</p>
                        <div className='line-bottom'></div>
                    </div>
                </div>
                <div className='nilia-container'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5'>
                        <img src="/galeria/dia-da-agua/foto-1.jpg" alt="Instituto Nilia | Dia da Água" className='galleryimage' />
                        <img src="/galeria/dia-da-agua/foto-2.jpg" alt="Instituto Nilia | Dia da Água" className='galleryimage' />
                        <img src="/galeria/dia-da-agua/foto-5.jpg" alt="Instituto Nilia | Dia da Água" className='galleryimage' />
                        <img src="/galeria/dia-da-agua/foto-6.jpg" alt="Instituto Nilia | Dia da Água" className='galleryimage' />
                    </div>
                </div>
            </section>
            <section className="nilia-section" style={{ paddingTop: 0 }}>
                <div className='nilia-container flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                        <p className='nilia-title-l font-orange'>Feira Gastronómica</p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
                        <p className='nilia-text-s '>A Feira Gastronómica do Instituto Nilia é um evento anual que celebra a diversidade cultural e culinária de Moçambique, promovendo a partilha de sabores e tradições entre a comunidade escolar.</p>
                        <div className='line-bottom'></div>
                    </div>
                </div>
                <div className='nilia-container'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5'>
                        <img src="/galeria/feira-gastronomica/feira1.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                        <img src="/galeria/feira-gastronomica/feira2.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                        <img src="/galeria/feira-gastronomica/feira3.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                        <img src="/galeria/feira-gastronomica/feira4.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                        <img src="/galeria/feira-gastronomica/feira5.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                        <img src="/galeria/feira-gastronomica/feira6.webp" alt="Instituto Nilia | Feira Gastronómica" className='galleryimage' />
                    </div>
                </div>
            </section>
            <section className="nilia-section" style={{ paddingTop: 0 }}>
                <div className='nilia-container flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
                        <p className='nilia-title-l font-orange'>Ohana</p>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-start gap-3'>
                        <p className='nilia-text-s '>Um evento organizado pelos alunos da 12ª Classe do Instituto Nilia, o Ohana é uma celebração da amizade, da partilha e da diversidade cultural, que promove a integração e a inclusão de todos os estudantes.</p>
                        <div className='line-bottom'></div>
                    </div>
                </div>
                <div className='nilia-container'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5'>
                        <img src="/galeria/almoco-12/foto-2.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                        <img src="/galeria/almoco-12/foto-4.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                        <img src="/galeria/almoco-12/foto-8.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                        <img src="/galeria/almoco-12/foto-10.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                        <img src="/galeria/almoco-12/foto-11.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                        <img src="/galeria/almoco-12/foto-12.jpg" alt="Instituto Nilia | Ohana" className='galleryimage' />
                    </div>
                </div>
            </section>
        </div>
    )
}