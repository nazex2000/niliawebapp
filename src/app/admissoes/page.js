import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../assets/images/nilia-kids-6.webp';
import Head from 'next/head';
import Image from 'next/image';
import nilia_place from '../../assets/images/admin.webp';
import nilia_kids_1 from '../../assets/images/nilia-kids-1.webp';
import nilia_team from '../../assets/images/nilia-teacher.png';
import nilia_book from '../../assets/icons/book.png';

import { MdCheckCircle, MdDoubleArrow, MdPersonSearch, MdRocket, MdSchool, MdTimeline } from 'react-icons/md';

//Styles import
import '../../components/css/main.css';
import '../../components/css/button.css';

//Icons import 
import mission_img from '../../assets/icons/target.png';
import vision_img from '../../assets/icons/binocular.png';
import values_img from '../../assets/icons/loyalty.png';
import VisitNilia from '@/components/sections/visit';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata = {
    title: "Instituto Nilia | Admissões",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Admissões</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - Admissões" />
                <meta property="og:description" content="Conheça o processo de admissão no Instituto Nilia." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilia_place} title={"Admissões"} text={"Processo de Inscrição"} />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='nilia-title-m'>Inicie agora a jornada de aprendizagem do seu filho no Instituto Nília</p>
                        <p className='nilia-text-s'>
                            O processo de inscrição no Instituto Nília é pensado para ser acessível, organizado e informativo, garantindo que tanto os novos alunos quanto seus encarregados de
                            educação tenham uma experiência tranquila e satisfatória ao se juntarem à nossa comunidade.<br />
                            O Instituto Nília valoriza a comunicação transparente e o apoio contínuo aos encarregados de educação, garantindo que todas as etapas do processo de inscrição sejam
                            claras e acompanhadas pela nossa equipe administrativa. Nossa missão é proporcionar uma transição suave para que os novos alunos possam iniciar sua jornada educacional
                            com confiança e entusiasmo.<br/>
                            Garanta sua vaga de forma prática: visite os escritórios da Unidade Tivane ou faça sua admissão online em apenas 5 minutos!
                        </p>
                        <p className='nilia-title-ms'>Requisitos de Inscrição</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8'>
                            <div className='flex flex-col gap-2'>
                                <p className='nilia-title-s'>Novas Matrículas</p>
                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        3 Fotografias tipo passe do aluno.
                                    </p>
                                </div>
                                
                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Cópia autenticada de um Documento de Identificação válido.
                                    </p>
                                </div>

                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Cópia autenticada do Boletim ou Certificado de Passagem da classe anterior (deve trazer o original para verificação presencial).
                                    </p>
                                </div>

                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Relatório Pedagógico das Classes anteriores (a partir da 2ª Classe).
                                    </p>
                                </div>

                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Assinatura da Ficha de Inscrição e do Termo de Compromisso.
                                    </p>
                                </div>

                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Pagamento da Taxa de Inscrição, da Taxa do Seguro de Acidentes Escolares e da Taxa de Material Complementar.
                                    </p>
                                </div>

                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='nilia-title-s'>Renovações de Matrículas</p>
                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        3 Fotografias actualizadas do aluno.
                                    </p>
                                </div>
                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Assinatura da ficha de inscrição e do termo de compromisso.
                                    </p>
                                </div>
                                <div className='flex flex-row gap-2 items-start'>
                                    <MdDoubleArrow size={20} color='#FF6600' className="min-w-[20px]" />
                                    <p className='nilia-text-s'>
                                        Pagamento da Taxa de Inscrição, da Taxa do Seguro de Acidentes Escolares
                                        e da Taxa de Material Complementar em duas prestações: 50% no acto da
                                        matrícula e 50% até 2 de Dezembro de 2024.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className='nilia-title-m' id='precario'>O valor de uma excelente educação em Moçambique</p>
                        <p className='nilia-text-s'>
                            No Instituto Nília, acreditamos que a educação é um investimento valioso no futuro dos nossos alunos. Nossa equipe pedagógica está comprometida em oferecer uma
                            educação de excelência que inspire, desafie e prepare os alunos para os desafios do futuro. Valorizamos a diversidade, a criatividade e a inovação, e buscamos
                            proporcionar um ambiente de aprendizagem seguro, acolhedor e estimulante para todos os nossos alunos.
                        </p>
                        <p className='nilia-text-s mt-0'>
                            Para informações complementares clique <a href="/documents/info.pdf" target="_blank" rel="noopener noreferrer" className="font-orange">aqui</a>.
                        </p>
                    </div>

                </div>
            </section>
            <VisitNilia />
        </div>
    )
}