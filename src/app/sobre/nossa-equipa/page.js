import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/nilia-teacher.png';
import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

//Images import
import nilia_kids_1 from '../../../assets/images/nilia-scroll-1.webp';
import director from '../../../assets/docente/p5.png';
import director_pedagogico from '../../../assets/docente/p12.png'
import person_1 from '../../../assets/docente/p30.jpg'
import person_2 from '../../../assets/docente/p19.jpg'
import person_3 from '../../../assets/docente/p20.jpg'
import person_4 from '../../../assets/docente/p21.jpg'
import person_5 from '../../../assets/docente/p26.jpg'
import person_6 from '../../../assets/docente/p32.jpg'
import person_7 from '../../../assets/docente/p29.jpg'
import person_8 from '../../../assets/docente/p27.jpg'
import person_9 from '../../../assets/docente/p25.jpg'
import person_10 from '../../../assets/docente/p4.JPG'
import person_11 from '../../../assets/docente/p11.jpg'
import person_12 from '../../../assets/docente/p13.jpg'
import person_13 from '../../../assets/docente/p31.jpeg'
import person_14 from '../../../assets/docente/p1.jpg'
import person_15 from '../../../assets/docente/p10.jpg'
import person_16 from '../../../assets/docente/p16.jpg'
import person_17 from '../../../assets/docente/p34.jpg'
import person_18 from '../../../assets/docente/p2.png'
import person_19 from '../../../assets/docente/p6.jpg'
import person_20 from '../../../assets/docente/p15.jpg'
import person_21 from '../../../assets/docente/p7.jpg'
import person_22 from '../../../assets/docente/p22.jpg'
import person_23 from '../../../assets/docente/p33.jpg'
import person_24 from '../../../assets/docente/p14.jpg'
import person_25 from '../../../assets/docente/p8.jpeg'
import person_26 from '../../../assets/docente/p18.jpg'
import person_27 from '../../../assets/docente/p23.jpg'
import person_28 from '../../../assets/docente/p24.jpg'
import person_29 from '../../../assets/docente/p9.jpg'
import person_30 from '../../../assets/docente/p17.jpg'
import person_31 from '../../../assets/docente/p3.jpg'
import person_32 from '../../../assets/docente/p28.jpg'

import VisitNilia from '@/components/sections/visit';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
    title: "Instituto Nilia | Sobre Nós",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
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
                                <p className='nilia-title-s'>Carmen Zucula</p>
                                <p className='nilia-text-s'>Diretora</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={director_pedagogico} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Hermenegildo Ciriaco</p>
                                <p className='nilia-text-s'>Director Pedagógico</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_1} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Paulo Nhamusso</p>
                                <p className='nilia-text-s text-center'>Responsável pela Ligação Escola - Comunidade.HEIC</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_32} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Noelma Dias</p>
                                <p className='nilia-text-s text-center'>Professora de Artes</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_2} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Laurinda Matias</p>
                                <p className='nilia-text-s text-center'>Professora da Pré-escolar</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_3} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Lúcia Tivane</p>
                                <p className='nilia-text-s text-center'>Professora da 2ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_4} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Lurdes Macuácua</p>
                                <p className='nilia-text-s text-center'>Professora da 2ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_5} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Nércia Zavale</p>
                                <p className='nilia-text-s text-center'>Professora da 3ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_6} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Tomás Bié</p>
                                <p className='nilia-text-s text-center'>Professor da 3ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_7} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Olívia Natingue</p>
                                <p className='nilia-text-s text-center'>Professora da 4ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_8} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Nídia Gafur</p>
                                <p className='nilia-text-s text-center'>Professora da 4ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_9} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Nelson Manjate</p>
                                <p className='nilia-text-s text-center'>Professor da 4ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_10} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Carlos Nhangumele</p>
                                <p className='nilia-text-s text-center'>Professor da 4ª Classe</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_11} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Esmeralda Rupia</p>
                                <p className='nilia-text-s text-center'>Professora de Português</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_12} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Idilsson Mucavele</p>
                                <p className='nilia-text-s text-center'>Professora de Português e Filosofia</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_13} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Samuel Mandlate</p>
                                <p className='nilia-text-s text-center'>Professor de Inglês</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_14} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Almerim Queco</p>
                                <p className='nilia-text-s text-center'>Professor de Inglês</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_15} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Erasmo Magosso</p>
                                <p className='nilia-text-s text-center'>Professor de Matemática</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_16} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>José David</p>
                                <p className='nilia-text-s text-center'>Professor de Matemática</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_17} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Tomás Cavele</p>
                                <p className='nilia-text-s text-center'>Professor de Matemática</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_18} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Ana Deisy Chamine</p>
                                <p className='nilia-text-s text-center'>Professora de Biologia</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_19} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Dalilo Agy</p>
                                <p className='nilia-text-s text-center'>Professor de Biologia</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_20} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>João Paulo Menezes</p>
                                <p className='nilia-text-s text-center'>Professor de Física</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_21} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>David Cuna</p>
                                <p className='nilia-text-s text-center'>Professor de Física</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_22} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Mária Antónia</p>
                                <p className='nilia-text-s text-center'>Professora de Química</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_23} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Zito Rade</p>
                                <p className='nilia-text-s text-center'>Professor de Química</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_24} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Isalina Tembre</p>
                                <p className='nilia-text-s text-center'>Professora de Geografia</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_25} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Emanuel Rungo</p>
                                <p className='nilia-text-s text-center'>Professor de Geografia e História</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_26} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Júlio Ubisse</p>
                                <p className='nilia-text-s text-center'>Professor de História</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_27} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Maria Celeste</p>
                                <p className='nilia-text-s text-center'>Professora de C. Sociais e História</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_28} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Natália Nuvunga</p>
                                <p className='nilia-text-s text-center'>Professora de Educação Visual e Ofiícios</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_29} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Emílio Guambe</p>
                                <p className='nilia-text-s text-center'>Professor de Informática e Xadrez</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_30} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Judas Gerente</p>
                                <p className='nilia-text-s text-center'>Professor de Educação Visual e DGD</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={person_31} alt='Director do Instituto Nília' className='nilia-team-image' />
                                <p className='nilia-title-s'>Arístides Nandja</p>
                                <p className='nilia-text-s text-center'>Professor de Educação Física</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}