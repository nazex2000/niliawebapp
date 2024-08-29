import NiliaNav from '@/components/sections/nilanav';
import nilio_bg from '../../assets/images/nilia-kids-6.webp';
import Head from 'next/head';
import Image from 'next/image';
import nilia_place from '../../assets/images/nilia-scroll-1.webp';
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
    title: "Instituto Nilia | Admissões",
    description: "O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
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
                            com confiança e entusiasmo.
                        </p>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-8'>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>1</p>
                                    <p className='nilia-title-s'>Preencha o formulário de inscrição</p>
                                </div>
                                <p className='nilia-text-s'>
                                    O primeiro passo para a admissão no Instituto Nília é preencher o formulário de inscrição online. Este formulário contém informações importantes sobre o aluno,
                                    incluindo dados pessoais, histórico acadêmico e informações de contato. Após o preenchimento do formulário, nossa equipe administrativa entrará em contato para
                                    confirmar a recepção e fornecer orientações adicionais.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>2</p>
                                    <p className='nilia-title-s'>Visita ao Instituto Nília</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após a confirmação do formulário de inscrição, os encarregados de educação e o aluno são convidados a visitar o Instituto Nília para uma visita guiada. Durante
                                    esta visita, os novos alunos terão a oportunidade de conhecer as instalações, interagir com a equipe e aprender mais sobre a nossa abordagem educacional. Esta visita
                                    é uma oportunidade para os novos alunos se familiarizarem com o ambiente escolar e fazerem perguntas sobre a vida no Instituto Nília.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>3</p>
                                    <p className='nilia-title-s'>Pagamento da taxa de inscrição</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após a visita ao Instituto Nília, os encarregados de educação são convidados a efetuar o pagamento da taxa de inscrição. Esta taxa é uma contribuição única que
                                    cobre os custos administrativos associados ao processo de inscrição. O pagamento pode ser feito por transferência bancária ou em dinheiro, e os detalhes serão
                                    fornecidos pela nossa equipe administrativa.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>4</p>
                                    <p className='nilia-title-s'>Entrevista</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após o pagamento da taxa de inscrição, os novos alunos são convidados a participar de uma entrevista com a equipe pedagógica do Instituto Nília. Esta entrevista
                                    é uma oportunidade para os novos alunos compartilharem mais sobre si mesmos, suas motivações e expectativas em relação à educação. A equipe pedagógica também
                                    aproveitará a oportunidade para conhecer melhor os novos alunos e avaliar como podemos apoiar seu desenvolvimento acadêmico e pessoal.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>5</p>
                                    <p className='nilia-title-s'>Avaliação</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após a entrevista, os novos alunos são convidados a participar de uma avaliação acadêmica para determinar seu nível de proficiência em diferentes áreas. Esta
                                    avaliação é uma ferramenta importante para a equipe pedagógica do Instituto Nília entender as necessidades e habilidades dos novos alunos, e desenvolver um plano
                                    educacional personalizado para apoiar seu crescimento e aprendizado.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>6</p>
                                    <p className='nilia-title-s'>Confirmação da admissão</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após a avaliação, os encarregados de educação receberão uma notificação da equipe administrativa do Instituto Nília sobre a admissão do aluno. Esta notificação
                                    incluirá informações sobre a aceitação do aluno, o plano educacional proposto e os próximos passos para a matrícula. Os encarregados de educação são convidados a
                                    revisar as informações e confirmar a admissão do aluno para garantir sua vaga no Instituto Nília.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 items-center'>
                                    <p className='circle-number'>7</p>
                                    <p className='nilia-title-s'>Matrícula</p>
                                </div>
                                <p className='nilia-text-s'>
                                    Após a confirmação da admissão, os encarregados de educação são convidados a efetuar a matrícula do aluno no Instituto Nília. Durante o processo de matrícula,
                                    os encarregados de educação devem fornecer documentos adicionais, como certidão de nascimento, cartão de vacinação e histórico escolar. A equipe administrativa
                                    fornecerá orientações detalhadas sobre os documentos necessários e os prazos para a matrícula.
                                </p>
                            </div>
                        </div>
                        <p className='nilia-title-m' id='precario'>O valor de uma excelente educação em Moçambique</p>
                        <p className='nilia-text-s'>
                            No Instituto Nília, acreditamos que a educação é um investimento valioso no futuro dos nossos alunos. Nossa equipe pedagógica está comprometida em oferecer uma
                            educação de excelência que inspire, desafie e prepare os alunos para os desafios do futuro. Valorizamos a diversidade, a criatividade e a inovação, e buscamos
                            proporcionar um ambiente de aprendizagem seguro, acolhedor e estimulante para todos os nossos alunos.
                        </p>
                        <p className='nilia-title-ms'>Preçario 2024-25</p>
                        <p className='nilia-text-s'>
                            A anuidade pode ser paga na totalidade no início do ano letivo com um desconto de 5% ou dividida em 2 prestações semestrais, 4 prestações trimestrais ou 11 prestações
                            mensais. No ato de matrícula, é necessário pagar a Taxa de Inscrição, Seguro de Acidentes Escolares e Taxa de Material Complementar
                        </p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr>
                                        <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700"></th>
                                        <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Inscrição</th>
                                        <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Outras taxas</th>
                                        <th className="py-2 px-4 bg-gray-200 text-left text-sm font-semibold text-gray-700">Anuidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 border-b">EP (Pré à 6ª Classe)</td>
                                        <td className="py-2 px-4 border-b">7.500,00 MT</td>
                                        <td className="py-2 px-4 border-b">
                                            <div>Seguro de Acidentes Escolares: 1.000,00 MT*</div>
                                            <div className="text-xs text-gray-500">*valor pode sofrer alteração após emissão da apólice pela seguradora</div>
                                            <div>Material Complementar: 7.500,00 MT</div>
                                            <div className="text-xs text-gray-500">Cobre: Fichas, textos, material lúdico, requisição de livros.</div>
                                        </td>
                                        <td className="py-2 px-4 border-b">174.900,00 MT</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b">ESG (7ª à 12ª Classe)</td>
                                        <td className="py-2 px-4 border-b">7.500,00 MT</td>
                                        <td className="py-2 px-4 border-b">
                                            <div>Seguro de Acidentes Escolares: 1.000,00 MT*</div>
                                            <div className="text-xs text-gray-500">*valor pode sofrer alteração após emissão da apólice pela seguradora</div>
                                            <div>Material Complementar: 7.500,00 MT</div>
                                            <div className="text-xs text-gray-500">Cobre: Fichas, textos, material lúdico, requisição de livros.</div>
                                        </td>
                                        <td className="py-2 px-4 border-b">185.900,00 MT</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className='nilia-text-s mt-4'>
                            Para informações complementares clique <a href="/documents/info.pdf" target="_blank" rel="noopener noreferrer" className="font-orange">aqui</a>.
                        </p>
                    </div>

                </div>
            </section>
            <VisitNilia />
        </div>
    )
}