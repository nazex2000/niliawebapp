import dynamic from 'next/dynamic';

//Styles import
import '../../../components/css/main.css';
import '../../../components/css/button.css';

import GoogleAnalytics from '@/components/GoogleAnalytics';

// Importar FormularioInscricao dinamicamente
const FormularioInscricao = dynamic(
  () => import('@/components/formulario/inscricao'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <p className="nilia-text-s">Carregando formulário...</p>
      </div>
    )
  }
);

export const metadata = {
    title: "Instituto Nilia | Inscrições",
    description: "Inscreva-se no Instituto Nilia e comece a sua jornada connosco. Prepare-se para o futuro com um ambiente de aprendizagem que valoriza a autoconfiança, a criatividade e o desenvolvimento pessoal.",
    keywords: "educação, aprendizagem, desenvolvimento pessoal, auto-aprendizagem, ensino fundamental, ensino secundário, Moçambique",
}

export default function Page() {
    return (
        <div>
            <GoogleAnalytics />
            <section className='nilia-section bg-nilia-standard'>
                <div className='nilia-container'>
                    <div className='w-full flex flex-col gap-4'>
                        <p className='nilia-title-m'>Submissão de Candidatura</p>
                        <FormularioInscricao />
                    </div>
                </div>
            </section>
        </div>
    )
}