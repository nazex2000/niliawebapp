import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/IMG_5594.webp';
import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

//Icons import from react-icons
import { MdArrowBackIos, MdDoubleArrow, MdSchool, MdTimeline, MdTimer } from 'react-icons/md';

import nilia_kids_1 from '../../../assets/images/nilia-kids-7.webp';
import oxford from '../../../assets/images/oxford.webp';

import VisitNilia from '@/components/sections/visit';
import PrimaryClasses from '@/components/sections/primaryClasses';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
    title: "Instituto Nilia | Ensino Primário",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {

    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Ensino Primário</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - Ensino Primário" />
                <meta property="og:description" content="O Ensino Primário no Instituto Nília segue o currículo do Sistema Nacional de Educação (SNE), mas com importantes complementos que visam enriquecer a experiência de aprendizagem dos alunos." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilio_bg} title={"Ensino"} text={"Primário"} />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container flex-col sm:flex-row'>
                    <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>Ensino Primário</h2>
                        <p className='nilia-text-s'>
                            O Ensino Primário no Instituto Nília segue o currículo do Sistema Nacional de Educação (SNE), mas com importantes complementos que visam enriquecer
                            a experiência de aprendizagem dos alunos. Este ciclo educativo abrange desde a 1ª até a 6ª classe e é fundamental para construir a base de conhecimento
                            e habilidades dos estudantes, preparando-os para os desafios do Ensino Secundário e para a vida. <br />Além das disciplinas tradicionais, o Instituto Nília introduz atividades inovadoras e métodos de ensino que incentivam a autonomia, a criatividade e o pensamento crítico dos alunos.
                            O foco está em assegurar que cada aluno desenvolva não apenas competências acadêmicas, mas também habilidades sociais e emocionais, promovendo um crescimento
                            equilibrado e integral.
                        </p>
                    </div>
                    <div className='w-full sm:w-1/3 flex flex-col justify-center items-center'>
                        <div className='card-school-info'>
                            <div className='w-full flex flex-row gap-2 items-center'>
                                <MdTimer className='icon' size={25} color='white' />
                                <p className='nilia-title-xs font-white'>Horários</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 pl-8 mt-2'>
                                <p className='nilia-text-xs font-white'>Pré, 1ª, 2ª e 3ª: 07:30 - 11:45(Segunda a Sexta Feira)
                                e 13:10 - 16:00 (4 X's por semana)</p>
                                <p className='nilia-text-xs font-white'>4ª, 5ª e 6ª: 07:30 - 11:45(Segunda a Sexta Feira)
                                e 13:10 - 16:00 (4 X's por semana)</p>
                            </div>
                            <div className='w-full flex flex-row gap-2 items-center mt-4'>
                                <MdSchool className='icon' size={25} color='white' />
                                <p className='nilia-title-xs font-white'>Informações utéis</p>
                            </div>
                            <div className='w-full flex flex-col gap-2 pl-8 mt-2'>
                                <p className='nilia-text-xs font-white'>Veja abaixo a grelha curricular do Ensino Primário</p>
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
                                <span className='font-bold'>Capacidade de resolução de problemas:</span> Os alunos serão capazes de identificar problemas, formular hipóteses e propor soluções de forma crítica e independente.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Comunicação eficaz:</span> Os alunos desenvolverão habilidades para se expressar com clareza, tanto oralmente quanto por escrito, em diversas situações.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Trabalho colaborativo:</span> Os alunos aprenderão a trabalhar em equipe, respeitando as opiniões dos outros e contribuindo para alcançar objetivos comuns.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Pensamento crítico:</span> Os alunos serão incentivados a questionar, analisar e refletir sobre o conhecimento adquirido, aplicando-o em novas situações.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ffef11' className="min-w-[20px]" />
                            <p className='nilia-text-s font-white'>
                                <span className='font-bold'>Responsabilidade e ética:</span> Os alunos serão orientados a agir de forma ética e responsável, reconhecendo a importância do respeito e da integridade em suas ações.
                            </p>
                        </div>
                    </div>
                    <div className=' w-1/3 hidden sm:flex flex-col gap-2'>
                        <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image h-full' />
                    </div>
                </div>
            </section>
            <section className='nilia-section'>
                <div className='nilia-container flex-col'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='nilia-title-m'>Grelha Curricular</p>
                        <PrimaryClasses />
                        <p className='nilia-title-m mt-6'>Apoio Educativo</p>
                        <p className='nilia-text-s'>
                            No Instituto Nília, acreditamos que cada aluno é único e merece atenção personalizada para alcançar seu pleno potencial. Por isso, oferecemos um conjunto de serviços de apoio educativo que visam atender às necessidades individuais de cada aluno, garantindo que todos tenham sucesso em sua jornada de aprendizagem.
                        </p>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ff812e' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Apoio Individualizado:</span> Sessões de reforço para alunos que precisam de atenção especial em determinadas disciplinas, garantindo que ninguém fique para trás.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ff812e' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Fichas de Trabalho Complementares:</span> Material adicional para praticar e consolidar o aprendizado, com foco em áreas onde os alunos apresentam mais dificuldades.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ff812e' className="min-w-[20px]" />
                            <p className='nilia-text-s'>
                                <span className='font-bold'>Programa de Mentoria:</span> Professores experientes atuam como mentores, orientando os alunos em sua jornada acadêmica e pessoal, ajudando-os a superar desafios e a desenvolver confiança em suas capacidades.
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-start'>
                            <MdDoubleArrow size={20} color='#ff812e' className="min-w-[20px]" />
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