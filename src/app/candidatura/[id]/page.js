'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { firebase } from '../../../base';
import html2pdf from 'html2pdf.js';
import PrintTemplate from '@/components/formulario/PrintTemplate';
import { Form, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import "../../../components/css/form.css";

export default function CandidaturaPage() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [form] = Form.useForm();
    const params = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const docRef = firebase.firestore().collection('submissoes').doc(params.id);
            const doc = await docRef.get();

            if (!doc.exists) {
                setError('Candidatura não encontrada');
                setLoading(false);
                return;
            }

            const submissionData = doc.data();
            
            // Preencher o form com os dados
            form.setFieldsValue({
                // Dados do Aluno
                name: submissionData.studentIdentity.name,
                dateOfBirth: submissionData.studentIdentity.dob,
                gender: submissionData.studentIdentity.gender,
                birthPlace: submissionData.studentIdentity.birthPlace,
                province: submissionData.studentIdentity.province,
                documentType: submissionData.studentIdentity.documentType,
                documentNumber: submissionData.studentIdentity.documentNumber,
                address: submissionData.studentIdentity.address,
                addressNumber: submissionData.studentIdentity.addressNumber,
                addressFlat: submissionData.studentIdentity.addressFlat,

                // Dados do Pai
                fatherName: submissionData.filiation.father.name,
                fatherProfession: submissionData.filiation.father.profession,
                fatherWorkPlace: submissionData.filiation.father.workPlace,
                fatherPhone: submissionData.filiation.father.phone,
                fatherWhatsApp: submissionData.filiation.father.whatsapp,
                fatherAddress: submissionData.filiation.father.address,
                fatherAddressService: submissionData.filiation.father.service,
                fatherEmail: submissionData.filiation.father.email,
                fatherAlternativeEmail: submissionData.filiation.father.alternativeEmail,

                // Dados da Mãe
                motherName: submissionData.filiation.mother.name,
                motherProfession: submissionData.filiation.mother.profession,
                motherWorkPlace: submissionData.filiation.mother.workPlace,
                motherPhone: submissionData.filiation.mother.phone,
                motherWhatsApp: submissionData.filiation.mother.whatsapp,
                motherAddress: submissionData.filiation.mother.address,
                motherAddressService: submissionData.filiation.mother.service,
                motherEmail: submissionData.filiation.mother.email,
                motherAlternativeEmail: submissionData.filiation.mother.alternativeEmail,

                // Encarregado de Educação
                educationGuardian: submissionData.educationGuardian,
                guardianName: submissionData.guardian?.name,
                guardianProfession: submissionData.guardian?.profession,
                guardianWorkPlace: submissionData.guardian?.workPlace,
                guardianPhone: submissionData.guardian?.phone,
                guardianWhatsApp: submissionData.guardian?.whatsapp,
                guardianAddress: submissionData.guardian?.address,
                guardianAddressService: submissionData.guardian?.service,
                guardianEmail: submissionData.guardian?.email,
                guardianAlternativeEmail: submissionData.guardian?.alternativeEmail,

                // Contactos de Emergência
                emergencyContacts: submissionData.emergencyContacts,

                // Histórico Académico
                academicHistory: submissionData.academicHistory,

                // Informação Adicional
                chronicDiseases: submissionData.additionalInformation.chronicDiseases,
                allergies: submissionData.additionalInformation.allergies,
                disabilities: submissionData.additionalInformation.disabilities,
                insurances: submissionData.additionalInformation.insurance,
                siblings: submissionData.additionalInformation.siblings,
                orphan: submissionData.additionalInformation.orphan,
                observations: submissionData.additionalInformation.otherInformation
            });

            setData({
                level: submissionData.level
            });

            // Gerar PDF automaticamente
            setTimeout(() => {
                handleDownloadPDF();
            }, 1000);

        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            setError('Erro ao carregar a candidatura');
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        const content = document.getElementById('print-content');
        
        if (!content) {
            setError('Erro ao gerar o documento');
            return;
        }

        const opt = {
            margin: [10, 10],
            filename: `formulario-inscricao-${params.id}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2,
                useCORS: true,
                letterRendering: true
            },
            jsPDF: { 
                unit: 'mm', 
                format: 'a4', 
                orientation: 'portrait' 
            }
        };

        html2pdf().from(content).set(opt).save()
            .then(() => {
                // Redirecionar para a página principal após o download
                window.location.href = '/';
            })
            .catch(error => {
                console.error('Erro ao gerar PDF:', error);
                setError('Erro ao gerar o documento');
            });
    };

    if (loading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <Spin indicator={<LoadingOutlined style={{ fontSize: 50, color: '#ff812e' }} spin />} />
                <p className="nilia-text-s mt-4">Gerando documento...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <p className="nilia-title-s text-red-500">{error}</p>
                <p className="nilia-text-s mt-2">Por favor, verifique o link e tente novamente</p>
            </div>
        );
    }

    return (
        <div className="hidden">
            <div id="print-content">
                <PrintTemplate 
                    data={data} 
                    form={form}
                />
            </div>
        </div>
    );
} 