import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../assets/images/nilia-kids-6.webp';
import Head from 'next/head';
import Image from 'next/image';
import nilia_place from '../../assets/images/nilia-place.png';
import nilia_kids_1 from '../../assets/images/nilia-kids-1.webp';
import nilia_team from '../../assets/images/nilia-teacher.png';
import nilia_book from '../../assets/icons/book.png';

import { MdCheckCircle, MdPersonSearch, MdRocket, MdSchool, MdTimeline } from 'react-icons/md';

//Styles import
import '../../components/css/main.css';
import '../../components/css/button.css';

//Icons import 
import mission_img from '../../assets/icons/target.png';
import vision_img from '../../assets/icons/binocular.png';
import values_img from '../../assets/icons/loyalty.png';
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
                <title>Instituto Nilia - Sobre</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
                <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
                <meta name="author" content="Instituto Nilia" />
                <meta property="og:title" content="Instituto Nilia - Sobre nós" />
                <meta property="og:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta property="og:image" content="../../assets/logo/nilia.webp" />
                <meta property="og:url" content="https://institutonilia.com/" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
                <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
                <meta name="twitter:image" content="../../assets/logo/nilia.webp" />
            </Head>
            <NiliaNav imageBg={nilio_bg} title={"Sobre Nós"} text={"Mais de 25 anos a educar."} />
            <section className='nilia-section'>
                <div className='nilia-container'>
                    <div className=' w-1/3 flex flex-col justify-center items-center'>
                        <Image src={nilia_place} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image' />
                    </div>
                    <div className=' w-2/3 flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>Educação irreverente, moderna e orientada para o futuro</h2>
                        <p className='nilia-text-s'>
                            O Instituto Nília é uma instituição de ensino privada moçambicana, com raízes que remontam a 1994, quando foi fundada como Instituto Edulândia. Em 1997,
                            a escola passou a se chamar Instituto Nília, consolidando sua identidade e missão.
                            Desde a sua criação, o Instituto Nília se destacou por oferecer uma abordagem pedagógica inovadora, centrada no aluno e em suas necessidades individuais.
                            A escola busca promover o desenvolvimento integral dos seus estudantes, estimulando a autonomia, a criatividade e o pensamento crítico.
                        </p>
                        <p className='nilia-text-s'>
                            O Instituto Nília é uma escola que oferece um ambiente de aprendizagem seguro e estimulante, onde os alunos são encorajados a explorar e a construir seu próprio
                            conhecimento. A instituição utiliza metodologias ativas e recursos tecnológicos para tornar o aprendizado mais eficaz e divertido.
                        </p>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdTimeline size={20} color='#48ff00' className="min-w-[20px]" />
                            <p className='nilia-text-s'><span className='font-bold'>Fundação</span> 1994 como Instituto Edulândia, 1997 como Instituto Nília.</p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdSchool size={20} color='#48ff00' className="min-w-[20px]" />
                            <p className='nilia-text-s'><span className='font-bold'>Foco:</span> Pedagogia inovadora, centrada no aluno.</p>
                        </div>
                        <div className='flex flex-row gap-2 items-start'>
                            <MdPersonSearch size={20} color='#48ff00' className="min-w-[20px]" />
                            <p className='nilia-text-s'><span className='font-bold'>Objectivo:</span> Desenvolvimento integral dos estudantes.</p>
                        </div>
                    </div>
                </div>
                <div className='nilia-container mt-16'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='nilia-title-l'>+25</p>
                            <p className='nilia-text-s'>Anos de experiência</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='nilia-title-l'>3</p>
                            <p className='nilia-text-s'>Percursos educativos</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='nilia-title-l'>+1000</p>
                            <p className='nilia-text-s'>Alunos formados</p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='nilia-title-l'>97%</p>
                            <p className='nilia-text-s'>Taxa de entrada no Ensino Superior</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='nilia-section bg-nilia-marrom'>
                <div className='nilia-container'>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                        <div className='flex flex-col gap-2 items-center'>
                            <Image src={mission_img} alt='Missão' width={80} height={80} />
                            <h3 className='nilia-title-s'>Missão</h3>
                            <p className='nilia-text-s text-center'>
                                Inspirar e capacitar cada aluno a ser um cidadão global, criativo e autônomo, preparado para os desafios do futuro.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <Image src={vision_img} alt='Visão' width={80} height={80} />
                            <h3 className='nilia-title-s'>Visão</h3>
                            <p className='nilia-text-s text-center'>
                                Ser referência em educação inovadora, oferecendo um ensino de qualidade que transforma vidas e contribui para o desenvolvimento da sociedade.
                            </p>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <Image src={values_img} alt='Valores' width={80} height={80} />
                            <h3 className='nilia-title-s'>Valores</h3>
                            <p className='nilia-text-s text-center'>
                                Compromisso com a excelência, respeito à diversidade, ética e responsabilidade social.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='nilia-section'>
                <div className='nilia-container'>
                    <div className=' w-2/3 flex flex-col gap-2'>
                        <h2 className='nilia-title-m'>Mais que uma escola,
                            uma comunidade</h2>
                        <p className='nilia-text-s'>
                            No Instituto Nília, a comunidade escolar é fundamental para o sucesso de cada aluno. Pais, professores e alunos trabalham juntos para
                            criar um ambiente de aprendizagem colaborativo e enriquecedor. Através de reuniões, eventos e projetos conjuntos, fortalecemos os laços
                            entre todos os membros da comunidade, promovendo um sentimento de pertencimento e engajamento.
                        </p>
                        <p className='nilia-title-xs mt-2'>Mais do que uma escola, o Instituto Nília é um lugar onde sonhos se realizam e futuros são construídos.</p>
                        <div className='flex flex-row gap-2 items-start mt-2'>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                            <div className='dot-orange'></div>
                        </div>
                    </div>
                    <div className=' w-1/3 flex flex-col justify-center items-center'>
                        <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image' />
                    </div>
                </div>
            </section>
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container'>
                    <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8'>
                        <div className='flex flex-col items-start gap-4'>
                            <h2 className='nilia-title-m'>Personalização do Ensino</h2>
                            <div className='flex flex-row gap-2 items-start'>
                                <MdSchool size={20} color='#48ff00' className="min-w-[20px]" />
                                <p className='nilia-text-s'><span className='font-bold'>Aprendizagem individualizada:</span> O Instituto Nília demonstra um forte compromisso em adaptar o ensino às necessidades e ritmos de cada aluno, promovendo um aprendizado mais significativo e eficaz.</p>
                            </div>
                            <div className='flex flex-row gap-2 items-start'>
                                <MdSchool size={20} color='#48ff00' className="min-w-[20px]" />
                                <p className='nilia-text-s'><span className='font-bold'>Desenvolvimento integral:</span> A escola busca desenvolver não apenas as habilidades cognitivas, mas também as socioemocionais, preparando os alunos para os desafios da vida.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-4'>
                            <h2 className='nilia-title-m'>Metodologia Inovadora</h2>
                            <div className='flex flex-row gap-2 items-start'>
                                <MdRocket size={20} color='#48ff00' className="min-w-[20px]" />
                                <p className='nilia-text-s'><span className='font-bold'>Metodologias ativas:</span> A utilização de métodos de ensino que colocam o aluno no centro do processo de aprendizagem, estimulando a participação e a colaboração.</p>
                            </div>
                            <div className='flex flex-row gap-2 items-start'>
                                <MdRocket size={20} color='#48ff00' className="min-w-[20px]" />
                                <p className='nilia-text-s'><span className='font-bold'>Recursos tecnológicos:</span> A integração de ferramentas digitais no dia a dia da sala de aula, tornando o aprendizado mais dinâmico e engajador.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='nilia-section'>
                <div className='nilia-container'>
                    <div className='activities-block gap-2'>
                        <Image src={nilia_team} alt='Atividades extracurriculares no Instituto Nília' className='activities-image' />
                        <Image src={nilia_book} alt='Atividades extracurriculares' className='activities-icons' />
                        <p className='nilia-title-ls font-white'>Conheça a nossa equipa</p>
                        <p className='nilia-text-s font-white w-1/3'>Somos uma grande equipa de educadores atentos e próximos dos nossos alunos.</p>
                        <div className='flex flex-row gap-2 items-start'>
                            <div className='dot-white'></div>
                            <div className='dot-white'></div>
                            <div className='dot-white'></div>
                        </div>
                        <button className='offer-card-button' style={{ marginTop: 15 }}>
                            <a href='/sobre/nossa-equipa'>Conheça a nossa equipa</a>
                        </button>
                    </div>
                </div>
            </section>
            <VisitNilia />
        </div>
    )
}