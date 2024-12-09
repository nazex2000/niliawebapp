import Head from 'next/head';
import Image from 'next/image';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import FormularioInscricao from '@/components/formulario/inscricao';

export const metadata = {
    title: "Instituto Nilia | Inscrições",
    description: "Comece a sua jornada connosco. Inscreva-se no Instituto Nilia e prepare-se para o futuro.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
            <Head>
                <title>Instituto Nilia - Inscrições</title>
                <link rel="icon" href="../favicon.ico" sizes="any" />
                <meta name="description" content="Comece a sua jornada connosco. Inscreva-se no Instituto Nilia e prepare-se para o futuro." />
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
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container'>
                    <div className=' w-full flex flex-col gap-4'>
                        <p className='nilia-title-m'>Submissão de Candidatura</p>
                        <FormularioInscricao />
                    </div>
                </div>
            </section>
        </div>
    )
}