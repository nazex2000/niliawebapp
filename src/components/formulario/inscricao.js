"use client";
import React, { useState, useEffect } from 'react';

import "../css/form.css";
import Image from 'next/image';
import nilia_kids from "../../assets/images/nilia-kids-1.webp";
import congrats_image from "../../assets/images/congrats.png";
import NiliaButton from '../buttons/button';
import { Col, DatePicker, Divider, Form, Input, Radio, Row, Select, Spin, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { getProvinces } from './form-data';
import NiliaButtonLight from '../buttons/buttonLight';
import { LoadingOutlined } from '@ant-design/icons';
import { firebase } from '../../base';
import { FaExpand, FaExpandAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
const { Option } = Select

const RELATIONSHIP_OPTIONS = [
    { value: 'avo', label: 'Avô/Avó' },
    { value: 'tio', label: 'Tio/Tia' },
    { value: 'primo', label: 'Primo/Prima' },
    { value: 'padrinho', label: 'Padrinho/Madrinha' },
    { value: 'vizinho', label: 'Vizinho' },
    { value: 'amigo', label: 'Amigo da Família' },
    { value: 'outro', label: 'Outro' }
];

export default function FormularioInscricao() {
    const navigate = useRouter();
    //Data of the form
    const [form] = useForm();
    const [provinces, setProvinces] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);

    useEffect(() => {
        getData();
        //verify if firebase is initialized
    }, []);

    const getData = async () => {
        const provincesData = getProvinces();
        setProvinces(provincesData);
    }

    const [current, setCurrent] = useState(0);
    const handleMenu = (pageNum) => {
        setCurrent(pageNum);
    };

    //Handle the class choose
    const handleClassChoose = () => {
        if (selectedLevel === null) {
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, selecione a classe pretendida</p>,
                placement: 'topRight'
            });
        } else {
            handleMenu(2);
        }
    }

    //Handle the identity data
    const handleIdentityData = () => {
        form.validateFields().then((values) => {
            handleMenu(3);
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Handle the filiation data
    const handleFiliationData = () => {
        form.validateFields().then((values) => {
            handleMenu(5);
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Handle the education guardian
    const [educationGuardian, setEducationGuardian] = useState('parents');
    const handleEducationGuardian = (e) => {
        setEducationGuardian(e.target.value);
    }
    const handleGuardianData = () => {
        form.validateFields().then((values) => {
            handleMenu(4)
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Emergency Contacts
    const handleEmergencyContacts = () => {
        form.validateFields().then((values) => {
            handleMenu(6);
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Academic History
    const ACADEMIC_RESULT_OPTIONS = [
        { value: 'transitou', label: 'Transitou' },
        { value: 'naoTransitou', label: 'Não Transitou' }
    ];

    const [haveAcademicHistory, setHaveAcademicHistory] = useState('yes');
    const handleHaveAcademicHistory = (e) => {
        setHaveAcademicHistory(e.target.value);
    }

    const handleAcademicHistory = () => {
        form.validateFields().then((values) => {
            handleMenu(7);
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Additional Information
    const [orphan, setOrphan] = useState('no');
    const handleOrphan = (e) => {
        setOrphan(e.target.value);
    }
    const handleAdditionalInformation = () => {
        form.validateFields().then((values) => {
            handleMenu(8);
            submitData();
        }).catch((error) => {
            form.setFields(error.errorFields);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Por favor, preencha todos os campos</p>,
                placement: 'topRight'
            });
        }
        );
    }

    //Submit Data
    const [result, setResult] = useState(null);
    const submitData = async () => {
        setLoading(true);
        try {
            // Combinar os nomes
            const firstName = form.getFieldValue('firstName') || '';
            const middleName = form.getFieldValue('middleName') || '';
            const lastName = form.getFieldValue('lastName') || '';
            const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

            // Formatar a data
            const dateOfBirth = form.getFieldValue('dateOfBirth')?.format('DD-MM-YYYY') || '';

            const docRef = await firebase.firestore().collection('submissoes').add({
                level: selectedLevel,
                studentIdentity: {
                    name: fullName,
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    dob: dateOfBirth,
                    gender: form.getFieldValue('gender') || '',
                    birthPlace: form.getFieldValue('birthPlace') || '',
                    province: form.getFieldValue('province') || '',
                    documentType: form.getFieldValue('documentType') || '',
                    documentNumber: form.getFieldValue('documentNumber') || '',
                    address: form.getFieldValue('address') || '',
                    addressNumber: form.getFieldValue('addressNumber') || '',
                    addressFlat: form.getFieldValue('addressFlat') || ''
                },
                filiation: {
                    father: {
                        name: form.getFieldValue('fatherName') || '',
                        profession: form.getFieldValue('fatherProfession') || '',
                        workPlace: form.getFieldValue('fatherWorkPlace') || '',
                        phone: form.getFieldValue('fatherPhone') || '',
                        whatsapp: form.getFieldValue('fatherWhatsApp') || '',
                        address: form.getFieldValue('fatherAddress') || '',
                        service: form.getFieldValue('fatherAddressService') || '',
                        email: form.getFieldValue('fatherEmail') || '',
                        alternativeEmail: form.getFieldValue('fatherAlternativeEmail') || ''
                    },
                    mother: {
                        name: form.getFieldValue('motherName') || '',
                        profession: form.getFieldValue('motherProfession') || '',
                        workPlace: form.getFieldValue('motherWorkPlace') || '',
                        phone: form.getFieldValue('motherPhone') || '',
                        whatsapp: form.getFieldValue('motherWhatsApp') || '',
                        address: form.getFieldValue('motherAddress') || '',
                        service: form.getFieldValue('motherAddressService') || '',
                        email: form.getFieldValue('motherEmail') || '',
                        alternativeEmail: form.getFieldValue('motherAlternativeEmail') || ''
                    }
                },
                educationGuardian: educationGuardian,
                guardian: {
                    name: form.getFieldValue('guardianName') || '',
                    profession: form.getFieldValue('guardianProfession') || '',
                    workPlace: form.getFieldValue('guardianWorkPlace') || '',
                    phone: form.getFieldValue('guardianPhone') || '',
                    whatsapp: form.getFieldValue('guardianWhatsApp') || '',
                    address: form.getFieldValue('guardianAddress') || '',
                    service: form.getFieldValue('guardianAddressService') || '',
                    email: form.getFieldValue('guardianEmail') || '',
                    alternativeEmail: form.getFieldValue('guardianAlternativeEmail') || ''
                },
                emergencyContacts: form.getFieldValue('emergencyContacts')?.map((contact) => {
                    return {
                        name: contact.name || '',
                        phone: contact.phone || '',
                        relationship: contact.relationship || ''
                    };
                }) || [],
                academicHistory: form.getFieldValue('academicHistory')?.map((history) => {
                    return {
                        year: history.year || '',
                        class: history.class || '',
                        school: history.school || '',
                        schoolAddress: history.schoolAddress || '',
                        finalGrade: history.finalGrade || ''
                    };
                }) || [],
                additionalInformation: {
                    orphan: orphan || '',
                    chronicDiseases: form.getFieldValue('chronicDiseases') || '',
                    allergies: form.getFieldValue('allergies') || '',
                    disabilities: form.getFieldValue('disabilities') || '',
                    insurance: form.getFieldValue('insurances') || '',
                    siblings: form.getFieldValue('siblings') || '',
                    otherInformation: form.getFieldValue('observations') || ''
                },
                status: 'pending',
                createdAt: new Date().toISOString(),
                metadata: [],
                notification: []
            });
            setResult(docRef.id);
            notification.success({
                message: <p className='nilia-title-s'>Sucesso</p>,
                description: <p className='nilia-text-s'>A sua inscrição foi submetida com sucesso</p>,
                placement: 'topRight'
            });
        } catch (error) {
            console.log(error);
            handleMenu(7);
            notification.error({
                message: <p className='nilia-title-s'>Erro</p>,
                description: <p className='nilia-text-s'>Houve um erro ao submeter a inscrição</p>,
                placement: 'topRight'
            });
        } finally {
            setLoading(false);
        }
    }

    //Loading Information
    const [loading, setLoading] = useState(false);

    const handleDownloadPage = () => {
        navigate.push(`/candidatura/${result}`);
    }

    // ... no início do componente, adicione os estados:
    const [hasChronicDiseases, setHasChronicDiseases] = useState('no');
    const [hasAllergies, setHasAllergies] = useState('no');
    const [hasDisabilities, setHasDisabilities] = useState('no');
    const [hasInsurance, setHasInsurance] = useState('no');
    const [hasSiblings, setHasSiblings] = useState('no');

    return (
        <section className='form-page'>
            <div className='form-steps-container'>
                <div className={`form-step ${current >= 0 ? 'form-step-active' : ''}`} onClick={() => handleMenu(0)}>
                    <p className={`form-step-text ${current >= 0 ? 'active' : ''}`}>
                        Bem Vindo
                    </p>
                </div>
                <div className={`form-step-line ${current > 0 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 1 ? 'form-step-active' : ''}`} >
                    <p className={`form-step-text ${current >= 1 ? 'active' : ''}`}>informações Gerais</p>
                </div>
                <div className={`form-step-line ${current > 1 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 6 ? 'form-step-active' : ''}`} >
                    <p className={`form-step-text ${current >= 6 ? 'active' : ''}`}>Histórico Académico</p>
                </div>
                <div className={`form-step-line ${current > 6 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 7 ? 'form-step-active' : ''}`} >
                    <p className={`form-step-text ${current >= 7 ? 'active' : ''}`}>Informação Adicional</p>
                </div>
            </div>
            {current === 0 && (
                <>
                    <div className='w-full flex flex-col sm:flex-row gap-8 form-border wscreen'>
                        <div className='w-full sm:w-1/3'>
                            <div className='form-image'>
                                <Image src={nilia_kids} alt="Instituto Nilia" className='form-image-home' />
                            </div>
                        </div>
                        <div className='w-full sm:w-2/3 flex flex-col gap-3'>
                            <p className='nilia-title-mss'>
                                Caro Encarregado(a), obrigado por considerar o Instituto Nilia
                                para a educação do seu educando
                            </p>
                            <p className='nilia-text-s'>
                                Estamos muito felizes por você considerar o Instituto Nília como parte importante da jornada educacional do seu filho(a). Aqui, oferecemos um ambiente acolhedor e seguro, que promove o desenvolvimento acadêmico, social e emocional dos nossos alunos.
                            </p>
                            <p className='nilia-text-s'>
                                Nesta página, você poderá submeter a inscrição para as
                                diferentes modalidades de ensino oferecidas, desde o pré-escolar (5 anos)
                                até o ensino secundário. Basta preencher o formulário com as
                                informações solicitadas e seguir os passos indicados.
                            </p>
                            <div className='ml-auto mt-6'>
                                <NiliaButton text='Iniciar Inscrição' onClick={() => handleMenu(1)} />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row gap-8 form-border-main mscreen'>
                        <div className='w-full flex flex-col gap-3 py-6'>
                            <div className='mx-auto'>
                                <FaExpand size={50} color='#ff812e' />
                            </div>
                            <p className='nilia-title-s text-center'>
                                Para uma melhor experiência, recomendamos que utilize um dispositivo com um ecrã maior
                            </p>
                        </div>
                    </div>
                </>
            )}
            {current === 1 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Classe Pretendida</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <p className='nilia-text-s'> Selecione a classe pretendida para o seu educando</p>
                    <div className='levelChoose'>
                        <div className={`level ${selectedLevel === 0 ? 'selected' : ''}`} onClick={() => setSelectedLevel(0)}>
                            <p className='nilia-text-s'>Pré-Escolar</p>
                        </div>
                        <div className={`level ${selectedLevel === 1 ? 'selected' : ''}`} onClick={() => setSelectedLevel(1)}>
                            <p className='nilia-text-s'>1ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 2 ? 'selected' : ''}`} onClick={() => setSelectedLevel(2)}>
                            <p className='nilia-text-s'>2ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 3 ? 'selected' : ''}`} onClick={() => setSelectedLevel(3)}>
                            <p className='nilia-text-s'>3ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 4 ? 'selected' : ''}`} onClick={() => setSelectedLevel(4)}>
                            <p className='nilia-text-s'>4ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 5 ? 'selected' : ''}`} onClick={() => setSelectedLevel(5)}>
                            <p className='nilia-text-s'>5ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 6 ? 'selected' : ''}`} onClick={() => setSelectedLevel(6)}>
                            <p className='nilia-text-s'>6ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 7 ? 'selected' : ''}`} onClick={() => setSelectedLevel(7)}>
                            <p className='nilia-text-s'>7ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 8 ? 'selected' : ''}`} onClick={() => setSelectedLevel(8)}>
                            <p className='nilia-text-s'>8ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 9 ? 'selected' : ''}`} onClick={() => setSelectedLevel(9)}>
                            <p className='nilia-text-s'>9ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 10 ? 'selected' : ''}`} onClick={() => setSelectedLevel(10)}>
                            <p className='nilia-text-s'>10ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 11 ? 'selected' : ''}`} onClick={() => setSelectedLevel(11)}>
                            <p className='nilia-text-s'>11ª Classe</p>
                        </div>
                        <div className={`level ${selectedLevel === 12 ? 'selected' : ''}`} onClick={() => setSelectedLevel(12)}>
                            <p className='nilia-text-s'>12ª Classe</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(0)} />
                    <NiliaButton text='Próximo' onClick={handleClassChoose} />
                </div>
            </div>)}
            {current === 2 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Dados de Identificação</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        onFinish={null}
                    >
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Primeiro Nome</p>}
                                    labelCol={{ span: 24 }}
                                    name='firstName'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o primeiro nome' }]}
                                >
                                    <Input
                                        placeholder='Insira o primeiro nome'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Apelido</p>}
                                    labelCol={{ span: 24 }}
                                    name='lastName'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o apelido' }]}
                                >
                                    <Input
                                        placeholder='Insira o apelido'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Outros Nomes</p>}
                                    labelCol={{ span: 24 }}
                                    name='middleName'
                                    className='input'
                                >
                                    <Input
                                        placeholder='Insira outros nomes'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={4}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Género</p>}
                                    labelCol={{ span: 24 }}
                                    name='gender'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, selecione o género' }]}
                                >
                                    <Select
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                        placeholder='Seleccione o género'
                                    >
                                        <Option className='nilia-text-s' value='M'>Masculino</Option>
                                        <Option className='nilia-text-s' value='F'>Femenino</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Data de Nascimento</p>}
                                    labelCol={{ span: 24 }}
                                    name='dateOfBirth'
                                    className='input'
                                    rules={[
                                        { required: true, message: 'Por favor, insira a data de nascimento' },
                                    ]}
                                >
                                    <DatePicker
                                        placeholder='DD-MM-AAAA'
                                        format="DD-MM-YYYY"
                                        style={{ marginTop: -10, width: '100%' }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Localidade</p>}
                                    labelCol={{ span: 24 }}
                                    name='birthPlace'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o seu local de nascimento' }]}
                                >
                                    <Input
                                        placeholder='Insira o seu local de nascimento'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Província</p>}
                                    labelCol={{ span: 24 }}
                                    name='province'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, selecione a província' }]}
                                >
                                    <Select
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                        placeholder='Seleccione a província'
                                    >
                                        {provinces.map((province) => (
                                            <Option className='nilia-text-s' value={province.name}>{province.name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Tipo de Documento</p>}
                                    labelCol={{ span: 24 }}
                                    name='documentType'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, selecione o tipo de documento' }]}
                                >
                                    <Select
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                        placeholder='Seleccione o tipo de documento'
                                    >
                                        <Option className='nilia-text-s' value='BI'>Bilhete de Identidade</Option>
                                        <Option className='nilia-text-s' value='Cédula de Identidade'>Cédula de Identidade</Option>
                                        <Option className='nilia-text-s' value='Boletim de Nascimento'>Boletim de Nascimento</Option>
                                        <Option className='nilia-text-s' value='Passaporte'>Passaporte</Option>
                                        <Option className='nilia-text-s' value='D.I.R.E'>D.I.R.E</Option>
                                        <Option className='nilia-text-s' value='Número de Identificação'>Número do Doc. de Identificação Apresentado</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={18}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Número do Documento</p>}
                                    labelCol={{ span: 24 }}
                                    name='documentNumber'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o número do documento' }]}
                                >
                                    <Input
                                        placeholder='Insira o número do documento'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Morada Completa</p>}
                                    labelCol={{ span: 24 }}
                                    name='address'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a morada completa' }]}
                                >
                                    <Input
                                        placeholder='Insira a morada completa'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Número</p>}
                                    labelCol={{ span: 24 }}
                                    name='addressNumber'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o número da morada' }]}
                                >
                                    <Input
                                        placeholder='Insira o número da morada'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Flat/Apartamento</p>}
                                    labelCol={{ span: 24 }}
                                    name='addressFlat'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o número do apartamento' }]}
                                >
                                    <Input
                                        placeholder='Insira o número do apartamento'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(1)} />
                    <NiliaButton text='Próximo' onClick={handleIdentityData} />
                </div>
            </div>)}
            {current === 3 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Encarregado de Educação</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        className='pb-2'
                        onFinish={null}
                    >
                        <p className='nilia-text-s'>Selecione o encarregado de educação do seu educando</p>
                        <Row gutter={16} title='Encarregado de Educação' className='pl-2 mt-2'>
                            <Radio.Group onChange={handleEducationGuardian} value={educationGuardian} className='w-full flex flex-row gap-4'>
                                <Radio value={'parents'} className='nilia-text-s'>Pai e Mãe</Radio>
                                <Radio value={'father'} className='nilia-text-s'>Pai</Radio>
                                <Radio value={'mother'} className='nilia-text-s'>Mãe</Radio>
                                <Radio value={'other'} className='nilia-text-s'>Outro</Radio>
                            </Radio.Group>
                        </Row>
                        {educationGuardian === 'other' && (<>
                            <Divider className='p-0 mt-3 mb-0' style={{ backgroundColor: 'rgb(255, 221, 199)' }} />
                            <Row gutter={16}>
                                <Col span={16}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Nome Completo</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianName'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira o nome completo' }]}
                                    >
                                        <Input
                                            placeholder='Insira o nome completo'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Profissão</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianProfession'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira a profissão' }]}
                                    >
                                        <Input
                                            placeholder='Insira a profissão'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Instituição que Trabalha</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianWorkPlace'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira a instituição onde trabalha' }]}
                                    >
                                        <Input
                                            placeholder='Insira a instituição onde trabalha'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Contacto de Chamadas</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianPhone'
                                        className='input'
                                        rules={[
                                            { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                            { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                        ]}
                                    >
                                        <Input
                                            placeholder='Insira o contacto de chamadas'
                                            prefix='+258'
                                            type='number'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Contacto de WhatsApp</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianWhatsApp'
                                        className='input'
                                        rules={[
                                            { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                            { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                        ]}
                                    >
                                        <Input
                                            placeholder='Insira o contacto de WhatsApp'
                                            prefix='+258'
                                            style={{ marginTop: -10 }}
                                            type='number'
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Morada Completa</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianAddress'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira a morada completa' }]}
                                    >
                                        <Input
                                            placeholder='Insira a morada completa'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Serviço</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianAddressService'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira o serviço' }]}
                                    >
                                        <Input
                                            placeholder='Insira o serviço'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Email</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianEmail'
                                        className='input'
                                        rules={[
                                            { required: true, message: 'Por favor, insira o email' },
                                            { type: 'email', message: 'O email não é válido' }
                                        ]}
                                    >
                                        <Input
                                            placeholder='Insira o email'
                                            type='email'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        label={<p className='nilia-text-s'>Email Alternativo</p>}
                                        labelCol={{ span: 24 }}
                                        name='guardianAlternativeEmail'
                                        className='input'
                                    >
                                        <Input
                                            placeholder='Insira o email alternativo'
                                            type='email'
                                            style={{ marginTop: -10 }}
                                            className='input-form'
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </>)}
                    </Form>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(2)} />
                    <NiliaButton text='Próximo' onClick={handleGuardianData} />
                </div>
            </div>)}
            {current === 4 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Filiação</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        className='pb-2'
                        onFinish={null}
                    >
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Nome do Pai</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherName'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o nome do pai' }]}
                                >
                                    <Input
                                        placeholder='Insira o nome do pai'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Profissão</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherProfession'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a profissão do pai' }]}
                                >
                                    <Input
                                        placeholder='Insira a profissão do pai'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Instituição que Trabalha</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherWorkPlace'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a instituição onde trabalha' }]}
                                >
                                    <Input
                                        placeholder='Insira a instituição onde trabalha'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Contacto de Chamadas</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherPhone'
                                    className='input'
                                    rules={[
                                        { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                        { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                    ]}
                                >
                                    <Input
                                        placeholder='Insira o contacto de chamadas'
                                        prefix='+258'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Contacto de WhatsApp</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherWhatsApp'
                                    className='input'
                                    rules={[
                                        { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                        { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                    ]}
                                >
                                    <Input
                                        placeholder='Insira o contacto de WhatsApp'
                                        prefix='+258'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Morada Completa</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherAddress'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a morada completa' }]}
                                >
                                    <Input
                                        placeholder='Insira a morada completa'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Serviço</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherAddressService'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o serviço' }]}
                                >
                                    <Input
                                        placeholder='Insira o serviço'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Email</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherEmail'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o email' }, { type: 'email', message: 'O email é inválido' }]}
                                >
                                    <Input
                                        placeholder='Insira o email'
                                        type='email'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Email Alternativo</p>}
                                    labelCol={{ span: 24 }}
                                    name='fatherAlternativeEmail'
                                    className='input'
                                >
                                    <Input
                                        placeholder='Insira o email alternativo'
                                        type='email'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider className='p-0 mt-3 mb-0' style={{ backgroundColor: 'rgb(255, 221, 199)' }} />
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Nome da Mãe</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherName'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o nome da mãe' }]}
                                >
                                    <Input
                                        placeholder='Insira o nome da mãe'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Profissão</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherProfession'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a profissão da mãe' }]}
                                >
                                    <Input
                                        placeholder='Insira a profissão da mãe'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Instituição que Trabalha</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherWorkPlace'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a instituição onde trabalha' }]}
                                >
                                    <Input
                                        placeholder='Insira a instituição onde trabalha'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Contacto de Chamadas</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherPhone'
                                    className='input'
                                    rules={[
                                        { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                        { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                    ]}
                                >
                                    <Input
                                        placeholder='Insira o contacto de chamadas'
                                        prefix='+258'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Contacto de WhatsApp</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherWhatsApp'
                                    className='input'
                                    rules={[
                                        { required: true, message: 'Por favor, insira o contacto de WhatsApp' },
                                        { len: 9, message: 'O contacto de WhatsApp deve ter 9 dígitos' }
                                    ]}
                                >
                                    <Input
                                        placeholder='Insira o contacto de WhatsApp'
                                        prefix='+258'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Morada Completa</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherAddress'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a morada completa' }]}
                                >
                                    <Input
                                        placeholder='Insira a morada completa'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Serviço</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherAddressService'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o serviço' }]}
                                >
                                    <Input
                                        placeholder='Insira o serviço'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Email</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherEmail'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o email' }, { type: 'email', message: 'O email é inválido' }]}
                                >
                                    <Input
                                        placeholder='Insira o email'
                                        type='email'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Email Alternativo</p>}
                                    labelCol={{ span: 24 }}
                                    name='motherAlternativeEmail'
                                    className='input'
                                >
                                    <Input
                                        placeholder='Insira o email alternativo'
                                        type='email'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(3)} />
                    <NiliaButton text='Próximo' onClick={handleFiliationData} />
                </div>
            </div>)}

            {current === 5 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Contactos de Emergência</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        className='pb-2'
                        onFinish={null}
                    >
                        <Form.List
                            name='emergencyContacts'
                            initialValue={[
                                { name: '', relationship: '', phone: '' },
                                { name: '', relationship: '', phone: '' },
                                { name: '', relationship: '', phone: '' }
                            ]}
                        >
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Row gutter={16} key={key} className="mb-4">
                                            <Col span={12}>
                                                <Form.Item
                                                    label={<p className='nilia-text-s'>Nome Completo</p>}
                                                    labelCol={{ span: 24 }}
                                                    name={[name, 'name']}
                                                    className='input'
                                                    rules={[{ required: true, message: 'Por favor, insira o nome completo' }]}
                                                >
                                                    <Input
                                                        placeholder='Insira o nome completo'
                                                        style={{ marginTop: -10 }}
                                                        className='input-form'
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    label={<p className='nilia-text-s'>Parentesco</p>}
                                                    labelCol={{ span: 24 }}
                                                    name={[name, 'relationship']}
                                                    className='input'
                                                    rules={[{ required: true, message: 'Por favor, selecione o parentesco' }]}
                                                >
                                                    <Select
                                                        placeholder="Selecione o parentesco"
                                                        style={{ marginTop: -10 }}
                                                        className='input-form'
                                                    >
                                                        <Option disabled value=''>Selecione o parentesco</Option>
                                                        {RELATIONSHIP_OPTIONS.map(option => (
                                                            <Option
                                                                key={option.value}
                                                                value={option.value}
                                                                className='nilia-text-s'
                                                            >
                                                                {option.label}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    label={<p className='nilia-text-s'>Contacto</p>}
                                                    labelCol={{ span: 24 }}
                                                    name={[name, 'phone']}
                                                    className='input'
                                                    rules={[
                                                        { required: true, message: 'Por favor, insira o contacto' },
                                                        { len: 9, message: 'O contacto deve ter 9 dígitos' }
                                                    ]}
                                                >
                                                    <Input
                                                        placeholder='Insira o contacto'
                                                        prefix='+258'
                                                        style={{ marginTop: -10 }}
                                                        className='input-form'
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    ))}
                                    {fields.length < 5 && (
                                        <Row gutter={16}>
                                            <Col span={24}>
                                                <div className='ml-auto w-[fit-content] mt-3'>
                                                    <NiliaButtonLight
                                                        text='Adicionar Contacto'
                                                        onClick={() => add()}
                                                        disabled={fields.length >= 5}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    )}
                                </>
                            )}
                        </Form.List>
                    </Form>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(4)} />
                    <NiliaButton text='Próximo' onClick={handleEmergencyContacts} />
                </div>
            </div>)}
            {current === 6 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Histórico Académico</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        className='pb-2'
                        onFinish={null}
                    >
                        <p className='nilia-text-s'>Possui algum histórico académico?</p>
                        <Row gutter={16} className='pl-2 mt-2'>
                            <Radio.Group onChange={handleHaveAcademicHistory} value={haveAcademicHistory} className='w-full flex flex-row gap-4'>
                                <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                            </Radio.Group>
                        </Row>
                        {haveAcademicHistory === 'yes' && (<>
                            <Form.List name='academicHistory' initialValue={[{ year: '', class: '', school: '', schoolAddress: '', finalGrade: '' }]}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                                            <>
                                            <Divider className='p-0 mt-3 mb-0' style={{ backgroundColor: 'rgb(255, 221, 199)' }} />
                                                <Row gutter={16} key={key}>
                                                    <Col span={4}>
                                                        <Form.Item
                                                            label={<p className='nilia-text-s'>Ano Lectivo</p>}
                                                            labelCol={{ span: 24 }}
                                                            name={[name, 'year']}
                                                            className='input'
                                                            rules={[
                                                                { required: true, message: 'Por favor, insira o ano lectivo' }
                                                            ]}
                                                        >
                                                            <Input
                                                                placeholder='Insira o ano lectivo'
                                                                style={{ marginTop: -10 }}
                                                                className='input-form'
                                                                min={2000}
                                                                max={(new Date()).getFullYear() + 1}
                                                                type='number'
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={4}>
                                                        <Form.Item
                                                            label={<p className='nilia-text-s'>Classe</p>}
                                                            labelCol={{ span: 24 }}
                                                            name={[name, 'class']}
                                                            className='input'
                                                            rules={[{ required: true, message: 'Por favor, insira a classe' }]}
                                                        >
                                                            <Input
                                                                placeholder='Insira a classe'
                                                                style={{ marginTop: -10 }}
                                                                className='input-form'
                                                                min={1}
                                                                max={12}
                                                                type='number'
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={16}>
                                                        <Form.Item
                                                            label={<p className='nilia-text-s'>Escola</p>}
                                                            labelCol={{ span: 24 }}
                                                            name={[name, 'school']}
                                                            className='input'
                                                            rules={[{ required: true, message: 'Por favor, insira a escola' }]}
                                                        >
                                                            <Input
                                                                placeholder='Insira a escola'
                                                                style={{ marginTop: -10 }}
                                                                className='input-form'
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                                <Row gutter={16}>
                                                    <Col span={12}>
                                                        <Form.Item
                                                            label={<p className='nilia-text-s'>Morada da Escola</p>}
                                                            labelCol={{ span: 24 }}
                                                            name={[name, 'schoolAddress']}
                                                            className='input'
                                                            rules={[{ required: true, message: 'Por favor, insira a morada da escola' }]}
                                                        >
                                                            <Input
                                                                placeholder='Insira a morada da escola'
                                                                style={{ marginTop: -10 }}
                                                                className='input-form'
                                                            />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col span={8}>
                                                        <Form.Item
                                                            label={<p className='nilia-text-s'>Resultado Final</p>}
                                                            labelCol={{ span: 24 }}
                                                            name={[name, 'finalGrade']}
                                                            className='input'
                                                            rules={[{ required: true, message: 'Por favor, selecione o resultado final' }]}
                                                        >
                                                            <Select
                                                                placeholder="Selecione o resultado final"
                                                                style={{ marginTop: -10 }}
                                                                className='input-form'
                                                            >
                                                                <Option disabled value=''>Selecione o resultado final</Option>
                                                                {ACADEMIC_RESULT_OPTIONS.map(option => (
                                                                    <Option key={option.value} value={option.label}>{option.label}</Option>
                                                                ))}
                                                            </Select>
                                                        </Form.Item>
                                                    </Col>
                                                </Row>
                                            </>
                                        ))}
                                        <Row gutter={16}>
                                            <Col span={24}>
                                                <div className='ml-auto w-[fit-content] mt-3'>
                                                    <NiliaButtonLight text='Adicionar Outro Histórico' onClick={() => add()} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </>
                                )}
                            </Form.List>
                        </>)}
                    </Form>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(5)} />
                    <NiliaButton text='Próximo' onClick={handleAcademicHistory} />
                </div>
            </div>)}
            {current === 7 && (<div className='w-full flex flex-col gap-1'>
                <p className='nilia-title-s'>Informação Adicional</p>
                <div className='w-full flex flex-col gap-1 form-border-main'>
                    <Form
                        form={form}
                        name="basic"
                        initialValues={{ remember: true }}
                        style={{ width: '100%' }}
                        className='pb-2'
                        onFinish={null}
                    >
                        <Row gutter={16}>
                            <Col span={24} className='mb-4'>
                                <p className='nilia-text-s'>Possui doenças crónicas?</p>
                                <Radio.Group 
                                    onChange={(e) => setHasChronicDiseases(e.target.value)} 
                                    value={hasChronicDiseases} 
                                    className='w-full flex flex-row gap-4 mt-2'
                                >
                                    <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                    <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                </Radio.Group>
                                {hasChronicDiseases === 'yes' && (
                                <Form.Item
                                    name='chronicDiseases'
                                        className='input mt-2'
                                        rules={[{ required: true, message: 'Por favor, especifique as doenças crónicas' }]}
                                >
                                    <Input.TextArea
                                            placeholder='Especifique as doenças crónicas'
                                        className='input-form'
                                    />
                                </Form.Item>
                                )}
                            </Col>

                            <Col span={24} className='mb-4'>
                                <p className='nilia-text-s'>Possui alergias?</p>
                                <Radio.Group 
                                    onChange={(e) => setHasAllergies(e.target.value)} 
                                    value={hasAllergies} 
                                    className='w-full flex flex-row gap-4 mt-2'
                                >
                                    <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                    <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                </Radio.Group>
                                {hasAllergies === 'yes' && (
                                <Form.Item
                                    name='allergies'
                                        className='input mt-2'
                                        rules={[{ required: true, message: 'Por favor, especifique as alergias' }]}
                                >
                                    <Input.TextArea
                                            placeholder='Especifique as alergias'
                                        className='input-form'
                                    />
                                </Form.Item>
                                )}
                            </Col>

                            <Col span={24} className='mb-4'>
                                <p className='nilia-text-s'>Possui alguma deficiência?</p>
                                <Radio.Group 
                                    onChange={(e) => setHasDisabilities(e.target.value)} 
                                    value={hasDisabilities} 
                                    className='w-full flex flex-row gap-4 mt-2'
                                >
                                    <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                    <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                </Radio.Group>
                                {hasDisabilities === 'yes' && (
                                <Form.Item
                                    name='disabilities'
                                        className='input mt-2'
                                        rules={[{ required: true, message: 'Por favor, especifique as deficiências' }]}
                                >
                                    <Input.TextArea
                                            placeholder='Especifique as deficiências'
                                        className='input-form'
                                    />
                                </Form.Item>
                                )}
                            </Col>

                            <Col span={24} className='mb-4'>
                                <p className='nilia-text-s'>Possui seguros de saúde?</p>
                                <Radio.Group 
                                    onChange={(e) => setHasInsurance(e.target.value)} 
                                    value={hasInsurance} 
                                    className='w-full flex flex-row gap-4 mt-2'
                                >
                                    <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                    <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                </Radio.Group>
                                {hasInsurance === 'yes' && (
                                <Form.Item
                                    name='insurances'
                                        className='input mt-2'
                                        rules={[{ required: true, message: 'Por favor, especifique dados dos seguros de saúde' }]}
                                >
                                    <Input.TextArea
                                            placeholder='Especifique dados da apólice de seguro'
                                        className='input-form'
                                    />
                                </Form.Item>
                                )}
                            </Col>

                            <Col span={24} className='mb-4'>
                                <p className='nilia-text-s'>Tem/teve algum irmão na escola?</p>
                                <Radio.Group 
                                    onChange={(e) => setHasSiblings(e.target.value)} 
                                    value={hasSiblings} 
                                    className='w-full flex flex-row gap-4 mt-2'
                                >
                                    <Radio value={'yes'} className='nilia-text-s'>Sim</Radio>
                                    <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                </Radio.Group>
                                {hasSiblings === 'yes' && (
                                <Form.Item
                                    name='siblings'
                                        className='input mt-2'
                                        rules={[{ required: true, message: 'Por favor, especifique os irmãos' }]}
                                >
                                    <Input.TextArea
                                            placeholder='Especifique o nome do(s) irmão(s)'
                                        className='input-form'
                                    />
                                </Form.Item>
                                )}
                            </Col>

                            <Col span={24} className='mt-2'>
                                <p className='nilia-text-s'>O Aluno é orfão?</p>
                                <Row gutter={16} className='pl-2 mt-2'>
                                    <Radio.Group onChange={handleOrphan} value={orphan} className='w-full flex flex-row gap-4'>
                                        <Radio value={'parents'} className='nilia-text-s'>De Pai e Mãe</Radio>
                                        <Radio value={'father'} className='nilia-text-s'>Apenas Pai</Radio>
                                        <Radio value={'mother'} className='nilia-text-s'>Apenas Mãe</Radio>
                                        <Radio value={'no'} className='nilia-text-s'>Não</Radio>
                                    </Radio.Group>
                                </Row>
                            </Col>

                            <Col span={24}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Observações adicionais</p>}
                                    labelCol={{ span: 24 }}
                                    name='observations'
                                    className='input'
                                >
                                    <Input.TextArea
                                        placeholder='Insira as observações'
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='w-full flex flex-row justify-between mt-4'>
                    <NiliaButton text='Anterior' onClick={() => handleMenu(6)} />
                    <NiliaButton text='Próximo' onClick={handleAdditionalInformation} />
                </div>
            </div>)}
            {current === 8 && (
                <>
                    <div className='w-full flex flex-col sm:flex-row gap-8 form-border-main'>
                        <div className='w-full flex flex-col gap-3 items-center justify-center pb-3'>
                            {loading ?
                                <div className='w-full h-36 flex flex-col items-center justify-center'>
                                    <LoadingOutlined style={{ fontSize: 50, color: '#ff812e' }} spin />
                                    <p className='nilia-text-s mt-4'>Aguarde...</p>
                                </div>
                                :
                                <>
                                    <Image src={congrats_image} width={150} height={150} />
                                    <p className='nilia-title-ms w-1/2 text-center'>
                                        Caro encarregado(a), a inscrição foi submetida com sucesso
                                    </p>
                                    <p className='nilia-text-s text-center'>
                                        A equipa da secretária entrará em contacto o mais breve possivel para informar o estágio da inscrição, solicitamos que fique atento aos canais de emails e whatsapp por forma a acompanhar o status da sua submissão.
                                    </p>
                                    <p className='nilia-text-s'>
                                        Encontre abaixo o formulário preenchido:
                                    </p>
                                    <div className='mt-4'>
                                        <NiliaButton
                                            text={loading ? 'Gerando PDF...' : 'Baixar Formulário'}
                                            onClick={handleDownloadPage}
                                            disabled={loading}
                                        />
                                    </div>
                                </>}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};
