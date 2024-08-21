import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/nilia-teacher.png';
import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

//Images import
import nilia_kids_1 from '../../../assets/images/nilia-scroll-1.webp';
import director from '../../../assets/images/director.jpg';


import VisitNilia from '@/components/sections/visit';

export const metadata = {
    title: "Instituto Nilia | Sobre Nós",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <Head>
                <title>Instituto Nilia - Nossa Equipe</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - A nossa equipa" />
                <meta property="og:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilio_bg} title={"Sobre Nós"} text={"conheça a nossa equipa"} />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container'>
                    <div className=' w-full flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>O sucesso dos nossos alunos é a nossa maior conquista</h2>
                        <p className='nilia-text-s'>
                        Atrás de cada sorriso e cada conquista dos nossos alunos, há uma equipe de profissionais comprometidos com nossa missão de inspirar e capacitar 
                        cada aluno a ser um cidadão global, criativo e autônomo. Cada membro da nossa equipe compartilha dos nossos valores de inovação, autonomia, 
                        criatividade, cidadania, excelência e acolhimento, trabalhando em conjunto para oferecer uma educação de qualidade.
                        </p>
                        <p className='nilia-title-xs mt-2'>Descubra abaixo a nossa brinhante equipa.</p>
                        <div className='flex flex-row gap-2 items-start mt-2'>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Dr. João Nília</p>
                                <p className='nilia-text-s'>Diretor</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Professor do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Prof. Maria José</p>
                                <p className='nilia-text-s'>Directora Pedagógica</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Professor do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Prof. Manuel</p>
                                <p className='nilia-text-s'>Professor de Música</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Professor do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Prof. Maria José</p>
                                <p className='nilia-text-s'>Professora de Artes</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Professor do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Prof. Manuel</p>
                                <p className='nilia-text-s'>Professor de Tics</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director} alt='Professor do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Prof. Maria José</p>
                                <p className='nilia-text-s'>Professora de Dança</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}