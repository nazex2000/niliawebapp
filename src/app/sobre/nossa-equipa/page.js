import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/nilia-teacher.png';
import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

//Images import
import mari from '../../../assets/docente/mm.webp';
import nel from '../../../assets/docente/nm.webp';
import Ngui from '../../../assets/docente/nc.webp';
import Noel from '../../../assets/docente/nd.webp';

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
                            O nosso corpo docente é constituído por funcionários permanentes, a
                            tempo inteiro, o que permite a sua concentração nas atividades escolares
                            e nos alunos com mais dificuldades. Ter um quadro permanente de
                            pessoal docente tem sido crucial para o desenvolvimento técnico dos
                            professores. Todos tem nível universitário, mas o seu maior capital é, não só
                            o conhecimento, mas também a responsabilidade, dedicação e o prazer
                            que têm na sua profissão.
                        </p>
                        <p className='nilia-title-xs mt-2'>Descubra abaixo a nossa brinhante equipa.</p>
                        <div className='flex flex-row gap-2 items-start mt-2'>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                        </div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={mari} alt='Marinela Muemela' className='nilia-team-image' />
                                <p className='nilia-title-s text-center'>Marinela Muemela</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={nel} alt='Nélia Macondzo' className='nilia-team-image' />
                                <p className='nilia-title-s text-center'>Nélia Macondzo</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={Ngui} alt='Nguiloze Aleixa da Conceição' className='nilia-team-image' />
                                <p className='nilia-title-s text-center'>Nguiloze Aleixa da Conceição</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <Image src={Noel} alt='Noelma Dias' className='nilia-team-image' />
                                <p className='nilia-title-s text-center'>Noelma Dias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}