import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/nilia-scroll-3.webp';
import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

//Icons import from react-icons
import { MdArrowBackIos, MdDoubleArrow, MdSchool, MdTimeline, MdTimer } from 'react-icons/md';

import nilia_kids_1 from '../../../assets/images/nilia-kids-2.webp';
import oxford from '../../../assets/images/oxford.webp';

import VisitNilia from '@/components/sections/visit';
import PrimaryClasses from '@/components/sections/primaryClasses';
import SecundaryClasses from '@/components/sections/secundaryClasses';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
    title: "Instituto Nilia | Ensino Secundário",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {

    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Ensino Secundário</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - Ensino Secundário" />
                <meta property="og:description" content="O Ensino Secundário no Instituto Nília é projetado para preparar os alunos para desafios acadêmicos avançados e para a vida além da escola." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilio_bg} title={"Ensino"} text={"Secúndario"} />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container flex-col sm:flex-row'>
                    <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>Ensino Secundário</h2>
                        <p className='nilia-text-s'>
                            O Ensino Secundário no Instituto Nília é projetado para preparar os alunos para desafios acadêmicos avançados e para a vida além da escola. Com um currículo abrangente e um
                            ambiente de aprendizagem estimulante, buscamos desenvolver não apenas conhecimentos acadêmicos sólidos, mas também habilidades críticas e sociais que serão essenciais para o
                            sucesso futuro dos alunos. Nossa abordagem combina rigor acadêmico com suporte individualizado, preparando os alunos para serem cidadãos responsáveis, criativos e autônomos.
                        </p>
                    </div>
                    <div className='w-full sm:w-1/3 flex flex-col justify-center items-center'>
                        <div className='card-school-info'>
                            <div className='w-full flex flex-row gap-2 items-center'>
                                <MdTimer className='icon' size={25} color='white' />
                                <p className='nilia-title-xs font-white'>Horários</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 pl-8 mt-2'>
                                <p className='nilia-text-xs font-white'>Horário de Aulas: 12:30 - 17:00</p>
                                <p className='nilia-text-xs font-white'>Horário de Atendimento: 07:00 - 19:00</p>
                            </div>
                            <div className='w-full flex flex-row gap-2 items-center mt-4'>
                                <MdSchool className='icon' size={25} color='white' />
                                <p className='nilia-title-xs font-white'>Informações utéis</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 pl-8 mt-2'>
                                <p className='nilia-text-xs font-white'>Veja abaixo a grelha curricular do Ensino Secundário</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='nilia-special-section'>
                <div className='nilia-container'>
                    <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                        <h2 className='nilia-title-ms font-orange'>À saída da educação básica, o aluno deverá ser capaz de:</h2>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Pensamento Crítico e Análise:</span> O aluno será capaz de analisar e avaliar informações de forma crítica, formular argumentos bem fundamentados e resolver problemas complexos.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Comunicação Eficaz:</span> O aluno desenvolverá habilidades avançadas de comunicação, incluindo a capacidade de se expressar claramente em diversas situações e de adaptar a comunicação para diferentes audiências.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Autonomia e Responsabilidade:</span> O aluno será capaz de gerenciar seu próprio aprendizado e responsabilidades, demonstrando autonomia e habilidades de organização e planejamento.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Colaboração e Trabalho em Equipe:</span> O aluno desenvolverá habilidades para trabalhar efetivamente em equipe, respeitando e contribuindo para o sucesso coletivo.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Preparação para Estudos Superiores e Carreira:</span> O aluno estará preparado para avançar em estudos superiores e para enfrentar desafios no mercado de trabalho com uma base sólida em conhecimento e habilidades.
                            </p>
                        </div>
                    </div>
                    <div className='hidden sm:flex  w-1/3 flex flex-col gap-2'>
                        <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image h-full' />
                    </div>
                </div>
            </section>
            <section className='nilia-section'>
                <div className='nilia-container flex-col'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='nilia-title-m'>Grelha Curricular</p>
                        <SecundaryClasses />
                        <p className='nilia-title-m mt-6'>Apoio Educativo</p>
                        <p className='nilia-text-s'>
                            No Instituto Nília, acreditamos que cada aluno é único e merece atenção personalizada para alcançar seu pleno potencial. Por isso, oferecemos um conjunto de serviços de apoio educativo que visam atender às necessidades individuais de cada aluno, garantindo que todos tenham sucesso em sua jornada de aprendizagem.
                        </p>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Apoio Individualizado:</span> Sessões de reforço são oferecidas para alunos que precisam de atenção especial em disciplinas específicas, garantindo que cada aluno receba o suporte necessário para superar desafios acadêmicos.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Fichas de Trabalho Complementares:</span> Material adicional é fornecido para praticar e consolidar o aprendizado, focando em áreas onde os alunos apresentam mais dificuldades.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Programa de Mentoria:</span> Professores experientes atuam como mentores, orientando os alunos em sua jornada acadêmica e pessoal, ajudando-os a superar desafios e a desenvolver confiança em suas capacidades.
                            </p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Integração com os Pais:</span> Encarregados de educação são parceiros ativos no processo educativo, recebendo feedback regular e sendo convidados a participar de sessões de orientação para apoiar o aprendizado dos filhos em casa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='nilia-section bg-nilia-marrom'>
                <div className='nilia-container'>
                    <div className='hidden sm:flex w-1/3 flex flex-col justify-center items-center'>
                        <Image src={oxford} alt='Oxford | Instituto Nília?' className='nilia-container-image' />
                    </div>
                    <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                        <p className='nilia-title-m'>Programa de Inglês Oxford</p>
                        <p className='nilia-text-s'>
                            O Instituto Nília dá uma ênfase especial ao ensino da língua inglesa, integrando-a como parte essencial do currículo desde o Ensino Primário até o Ensino Secundário. A partir de 2024, o
                            Instituto adota os manuais da Oxford University Press para todas as classes, da 1ª à 12ª classe. Este material é conhecido por sua qualidade e abordagem abrangente, garantindo que os
                            alunos desenvolvam habilidades de comunicação em inglês de maneira progressiva e eficaz. O objetivo do programa de inglês no Instituto Nília é de preparar as crianças para utilizar o inglês como uma ferramenta essencial em seus futuros estudos e carreiras, em um mundo cada vez mais globalizado.
                        </p>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}