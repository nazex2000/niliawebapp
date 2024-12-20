import Carousel from '@/components/slider/carrousel';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

//Images import
import nilia_img_1 from '../assets/images/carrousel_1.webp';
import nilia_img_2 from '../assets/images/carrousel_2.webp';
import nilia_img_3 from '../assets/images/carrousel_3.webp';
import nilia_img_4 from '../assets/images/carrousel_4.webp';
import nilia_img_5 from '../assets/images/c5.JPG';
import nilia_kids_1 from '../assets/images/nilia-kids-1.webp';
import nilia_kids_2 from '../assets/images/nilia-kids-2.webp';
import nilia_kids_3 from '../assets/images/nilia-kids-3.webp';
import nilia_kids_4 from '../assets/images/nilia-kids-4.webp';
import nilia_kids_5 from '../assets/images/oferta-formativa.webp';
import nilia_painting from '../assets/images/nilia-painting.png';
import nilia_book from '../assets/icons/mind.png';
import prateleira from '../assets/images/ondekids.webp';
import nilia_place from '../assets/images/tiv.webp';
import nilia_place_2 from '../assets/images/mun.webp';
//Styles import
import '../components/css/main.css';

//Icons import from react-icons
import { MdCheck, MdCheckCircle } from 'react-icons/md';
import NiliaButton from '@/components/buttons/button';
import Testimonials from '@/components/slider/testimonials';
import OfferCard from '@/components/cards/offerCard';
import FrequentAsks from '@/components/sections/frequentasks';
import VisitNilia from '@/components/sections/visit';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ResultSlider from '@/components/slider/slide-results';
import YouTubeComponet from '@/components/cards/youtube';

export default function Home() {
  return (
    <>
      <GoogleAnalytics />
      <Head>
        <title>Instituto Nilia - Preparando Estudantes para o Futuro</title>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta name="description" content="O Instituto Nilia oferece um ambiente de aprendizagem que promove a autoconfiança, a criatividade e o desenvolvimento pessoal, preparando os alunos para enfrentar os desafios do futuro." />
        <meta name="keywords" content="educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique" />
        <meta name="author" content="Instituto Nilia" />
        <meta property="og:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
        <meta property="og:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
        <meta property="og:image" content="../assets/logo/nilia.webp" />
        <meta property="og:url" content="https://institutonilia.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Instituto Nilia - Preparando Estudantes para o Futuro" />
        <meta name="twitter:description" content="Implementando estratégias psico-pedagógicas para o desenvolvimento integral dos alunos." />
        <meta name="twitter:image" content="../assets/logo/nilia.webp" />
      </Head>
      <Carousel data={[
        { image: nilia_img_1 },
        { image: nilia_img_2 },
        { image: nilia_img_3 },
        { image: nilia_img_4 },
        { image: nilia_img_5 },
      ]} />
      <section className='nilia-section'>
        <div className='nilia-container'>
          <div className='hidden sm:flex w-1/2 flex flex-col justify-center items-center'>
            <Image src={nilia_kids_1} alt='Porquê escolher o Instituto Nília?' className='nilia-container-image' />
          </div>
          <div className='w-full sm:w-1/2 flex flex-col gap-2'>
            <h2 className='nilia-title-m'>Por que escolher o Instituto Nília?</h2>
            <p className='nilia-title-xs mt-2'>Descubra por que famílias confiam em nós</p>
            <p className='nilia-text-s'>
              No Instituto Nília, acreditamos que cada aluno é único e possui um potencial infinito. Nossa missão é oferecer uma educação de excelência, que inspire e prepare nossos alunos para os desafios do futuro.
            </p>
            <div className='flex flex-row gap-2 items-start'>
              <MdCheckCircle size={20} color='#48ff00' className="min-w-[20px]" />
              <p className='nilia-text-s'><span className='font-bold'>Foco no aluno:</span> O nosso ensino é individualizado, endereçamos
                as diferenças especificas dos alunos na turma. Encorajamos o
                estudante a realizar as actividades por sua própria descoberta,
                por tentativa, erro e autocorreção, promovendo autonomia e
                reconhecimento das suas próprias capacidades</p>
            </div>
            <div className='flex flex-row gap-2 items-start'>
              <MdCheckCircle size={20} color='#48ff00' className="min-w-[20px]" />
              <p className='nilia-text-s'><span className='font-bold'>Inovador:</span> Metodologias activas e tecnologia para um aprendizado mais eficaz.</p>
            </div>
            <div className='flex flex-row gap-2 items-start'>
              <MdCheckCircle size={20} color='#48ff00' className="min-w-[20px]" />
              <p className='nilia-text-s'><span className='font-bold'>Acolhedor:</span> Ambiente seguro e estimulante para explorar e crescer.</p>
            </div>
            <div className='flex flex-row gap-2 items-start mb-5'>
              <MdCheckCircle size={20} color='#48ff00' className="min-w-[20px]" />
              <p className='nilia-text-s'><span className='font-bold'>Qualidade:</span> Excelentes resultados em avaliações e participação em projectos transformadores.</p>
            </div>
            <NiliaButton text={<a href='/sobre'>Saiba mais</a>} />


          </div>
        </div>
        <div className='nilia-container mt-16 flex-col sm:flex-row'>
          <div className='w-full sm:w-1/2 flex flex-col gap-8'>
            <p className='nilia-title-l mt-2 text-center sm:text-left'>RESULTADOS QUE <br />FALAM POR NÓS</p>
            <div className='w-full grid grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='nilia-title-l'>97%</p>
                <p className='nilia-text-s'>Taxa de Sucesso</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='nilia-title-l'>+25</p>
                <p className='nilia-text-s'>Anos de Experiência</p>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-1/2 flex flex-col justify-center items-center'>
            <ResultSlider />
          </div>
        </div>
      </section>
      <section className='nilia-section bg-nilia-marrom'>
        <div className='nilia-container flex-col sm:flex-row'>
          <div className='w-full sm:flex w-1/2 flex flex-col justify-center items-center rounded-lg' style={{minHeight:'40vh', overflow:'hidden'}}>
            <YouTubeComponet/>
          </div>
          <div className='w-full sm:w-1/2 flex flex-col justify-center items-center gap-4'>
            <p className='nilia-title-ls text-center'>Testemunhos da <br />nossa comunidade</p>
            <Testimonials />
          </div>
        </div>
      </section>
      <section className='nilia-section'>
        <div className='nilia-container flex-col sm:flex-row'>
          <div className='w-full sm:w-2/3 flex flex-col justify-center gap-4'>
            <p className='nilia-title-m'>Onde o futuro é contruído com dedicação</p>
            <p className='nilia-text-s'>
              No Instituto Nília, acreditamos que a educação vai além da sala de aula. Aqui, cada aluno é visto como um indivíduo único, com talentos e potencialidades
              que precisam ser descobertos e cultivados. Nossa missão é preparar os alunos não apenas para terem sucesso nos exames, mas para se tornarem cidadãos completos,
              prontos para enfrentar os desafios de um mundo em constante mudança.
              <br />
              Escolher o Instituto Nília é optar por uma educação que forma líderes, inovadores e cidadãos conscientes. Venha conhecer-nos e descubra como podemos ajudar a
              construir o futuro do seu filho com excelência e dedicação.
            </p>
            <div className='flex flex-row gap-2 items-start'>
              <div className='dot-orange'></div>
              <div className='dot-orange'></div>
              <div className='dot-orange'></div>
            </div>
          </div>
          <div className='w-fu;; sm:w-1/3 flex flex-col justify-center items-center'>
            <Image src={prateleira} alt='Onde o Futuro é Construído com Excelência' className='nilia-container-image' />
          </div>
        </div>
        <div className='nilia-container mt-8'>
          <div className=' w-full flex flex-col gap-4'>
            <p className='nilia-title-m'>Descubra os nossos 2 campus</p>
            <p className='nilia-text-s'>O Instituto Nília possui dois campus, cada um com uma proposta pedagógica única e adaptada às necessidades dos alunos, oferecendo um ambiente
              educacional de alta qualidade para diferentes níveis de ensino, desde o pré-escolar até o ensino secundário.
            </p>

            <div className='flex flex-row gap-2 items-center gap-8'>
              <div className='w-1/3 flex flex-col gap-2 hidden sm:block'>
                <Image src={nilia_place} alt='Unidade Tivane' className='nilia-container-image' style={{ maxHeight: '240px' }} />
              </div>
              <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                <p className='nilia-title-ms'>Unidade Tivane</p>
                <Image src={nilia_place} alt='Unidade Tivane' className='nilia-container-image sm:hidden block' style={{ maxHeight: '240px' }} />
                <p className='nilia-text-s'>
                  Situada na Av. Armando Tivane, 1581, em Maputo, a Unidade Tivane é o coração
                  do nosso instituto, onde se concentra o ensino pré-escolar e primário. Este
                  campus oferece um ambiente acolhedor e estimulante para crianças dos 5 anos
                  aos 8 anos (Pré à 3ª Classe). As instalações incluem salas de aula modernas, uma
                  biblioteca apetrechada, um playground seguro e áreas verdes que incentivam a
                  exploração e o aprendizado. A Unidade Tivane também abriga nossa sede
                  administrativa.
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-2 items-center gap-8 mt-4'>

              <div className='w-full sm:w-2/3 flex flex-col gap-2'>
                <p className='nilia-title-ms'>Unidade Magumbwé</p>
                <Image src={nilia_place_2} alt='Unidade Tivane' className='nilia-container-image sm:hidden block' />
                <p className='nilia-text-s'>
                  Localizada na Av. F. Orlando Magumbwé, 837, em Maputo, a Unidade Magumbwé
                  é dedicada ao 2º nível do ensino primário e ao ensino secundário. O campus é
                  dividido em dois turnos: manhã e tarde. No turno da manhã, oferecemos ensino
                  para o 2º nível do primário (4ª à 6ª classes) e 7ª e 8ª classes do ensino secundário.
                  No turno da tarde, atendemos alunos do ensino secundário, das 9ª à 12ª classes.
                  A Unidade Magumbwé conta com instalações avançadas, incluindo laboratório,
                  biblioteca, sala de informática e espaços dedicados para atividades
                  extracurriculares, promovendo um ambiente de aprendizado dinâmico e
                  enriquecedor.
                </p>
              </div>
              <div className='w-1/3 flex flex-col gap-2 hidden sm:block'>
                <Image src={nilia_place_2} alt='Unidade Tivane' className='nilia-container-image' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='nilia-section bg-nilia-standard'>
        <div className='nilia-container'>
          <div className=' w-full flex flex-col gap-4'>
            <p className='nilia-title-ls'>Oferta formativa</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <OfferCard title='Ensino Pré-Escolar' bgImg={nilia_kids_5} href='/ensino/pre-escolar' />
              <OfferCard title='Ensino Primário' bgImg={nilia_img_2} href='/ensino/primario' />
              <OfferCard title='Ensino Secundário' bgImg={nilia_kids_4} href='/ensino/secundario' />
            </div>
          </div>
        </div>
      </section>

      <section className='nilia-section'>
        <div className='nilia-container'>
          <div className='activities-block gap-2'>
            <Image src={nilia_painting} alt='Atividades extracurriculares no Instituto Nília' className='activities-image hidden sm:flex' />
            <Image src={nilia_book} alt='Atividades extracurriculares' className='activities-icons' />
            <p className='nilia-title-ls font-white'>Atividades de Interesse</p>
            <p className='nilia-text-s font-white w-full sm:w-1/3'>Descubra as atividades de interesse disponíveis para crianças e jovens no Instituto Nília.</p>
            <div className='flex flex-row gap-2 items-start'>
              <div className='dot-white'></div>
              <div className='dot-white'></div>
              <div className='dot-white'></div>
            </div>
            <button className='offer-card-button' style={{ marginTop: 15 }}>Saiba mais</button>
          </div>
        </div>
      </section>
      <FrequentAsks />
      <VisitNilia />

    </>
  )
}