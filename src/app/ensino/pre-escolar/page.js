import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../../assets/images/capa-pre.png';
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
                <title>Instituto Nilia - Pré-Escolar</title>
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
            <NiliaNav imageBg={nilio_bg} title={"Ensino"} text={"Pré-Escolar"} />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container flex-col sm:flex-row'>
                    <div className='w-full flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>Ensino Pré-Escolar</h2>
                        <p className='nilia-text-s'>
                            No Instituto Nília, o Pré-escolar está disponibilizado apenas para os alunos que fazem 5 anos até 30 de Junho do ano lectivo. Esta idade não é absorvida nem pelo ensino pré-escolar, nem pelo escolar.
                            <br />A educação adequada a esta fase de desenvolvimento da criança é crucial. Ela prepara a criança para a aprendizagem mais estruturada da escola primária.
                            <br />No Instituto Nília, as actividades pedagógicas estão orientadas para estimular a maturação biológica e coordenação motora, equilíbrio emocional, autonomia e convivência social. Esta maturação suporta o desenvolvimento pessoal e intelectual.
                            <br />O poder do jogo é muito forte, nesta fase. É a “linguagem” da criança.
                            <br />Pesquisas provam que o jogo estimula a estrutura do cérebro, acelerando os processos naturais de crescimento global e de comunicação com os outros e com o mundo à sua volta.
                            <br />O Instituto Nília usa esse conhecimento para organizar actividades pedagógicas lúdicas que, na realidade, praticam colaboração, resolução de conflito, uso de valores e regras sociais de comportamento pessoal e social. Integradas nas mesmas actividades, estão jogos e tarefas lúdicas que orientam para o desenvolvimento da pré-leitura, pré-escrita, cálculo, início de raciocínio lógico e estratégico. Neste estágio, a criança requer muito movimento e ritmo para crescer em todos os aspectos.
                        </p>
                    </div>
                </div>
            </section>
            <section className='nilia-special-section'>
                <div className='nilia-container'>
                    <div className='w-full flex flex-col gap-2'>
                        <h2 className='nilia-title-ms font-orange'>O grande diferencial do Instituto Nilia:</h2>
                        <div className='flex flex-row gap-2 items-start'>
                            <p className='nilia-text-s font-white'>
                                Integramos disciplinas como Dança, Música, Movimento Livre no parque e no pátio. Na área de Artes as crianças desenvolvem em simultâneo a sua motricidade fina e a sua criatividade. Damos particular atenção à Linguagem e iniciamos uma segunda língua de comunicação: o Inglês. Aqui a criança dispõe de vídeos, biblioteca bilingue e ludoteca. O objectivo, nesta fase, é familiarizar a criança com a língua inglesa, levá-la a nomear palavras, e entender frases ou histórias curtas.
                                <br/>Tirando partido da natural curiosidade da criança, prazer na vivência experiencial, atracção pela descoberta e fantasia, conduzimos uma aprendizagem espontânea, exploradora e divertida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}