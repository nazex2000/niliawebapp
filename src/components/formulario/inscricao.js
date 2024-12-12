"use client";
import React, { useState, useEffect } from 'react';

import "../css/form.css";
import Image from 'next/image';
import nilia_kids from "../../assets/images/nilia-kids-1.webp";
import NiliaButton from '../buttons/button';
import { Col, Divider, Form, Input, Radio, Row, Select, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { getProvinces } from './form-data';
import NiliaButtonLight from '../buttons/buttonLight';

const { Option } = Select

export default function FormularioInscricao() {
    //Data of the form
    const [form] = useForm();
    const [provinces, setProvinces] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const provincesData = getProvinces();
        setProvinces(provincesData);
    }

    const [current, setCurrent] = useState(5);
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
            handleMenu(4);
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
    const [educationGuardian, setEducationGuardian] = useState(0);
    const handleEducationGuardian = (e) => {
        setEducationGuardian(e.target.value);
    }
    const handleGuardianData = () => {
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

    return (
        <section className='form-page'>
            <div className='form-steps-container'>
                <div className={`form-step ${current >= 0 ? 'form-step-active' : ''}`} onClick={() => handleMenu(0)}>
                    <p className={`form-step-text ${current >= 0 ? 'active' : ''}`}>
                        Bem Vindo
                    </p>
                </div>
                <div className={`form-step-line ${current > 0 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 1 ? 'form-step-active' : ''}`} onClick={() => handleMenu(1)}>
                    <p className={`form-step-text ${current >= 1 ? 'active' : ''}`}>informações Gerais</p>
                </div>
                <div className={`form-step-line ${current > 1 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 2 ? 'form-step-active' : ''}`} onClick={() => handleMenu(2)}>
                    <p className={`form-step-text ${current >= 2 ? 'active' : ''}`}>Histórico Académico</p>
                </div>
                <div className={`form-step-line ${current > 2 ? 'active' : ''}`}></div>
                <div className={`form-step ${current >= 3 ? 'form-step-active' : ''}`} onClick={() => handleMenu(3)}>
                    <p className={`form-step-text ${current >= 3 ? 'active' : ''}`}>Informação Adicional</p>
                </div>
            </div>
            {current === 0 && (
                <>
                    <div className='w-full flex flex-col sm:flex-row gap-8 form-border'>
                        <div className='w-full sm:w-1/3'>
                            <div className='form-image'>
                                <Image src={nilia_kids} alt="Instituto Nilia" className='form-image-home' />
                            </div>
                        </div>
                        <div className='w-full sm:w-2/3 flex flex-col gap-3'>
                            <p className='nilia-title-mss'>
                                Caro Encarregado(a), obrigado por considerar o Instituto Nília
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
                            <Col span={18}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Nome Completo</p>}
                                    labelCol={{ span: 24 }}
                                    name='name'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira o seu nome completo' }]}
                                >
                                    <Input
                                        placeholder='Insira o seu nome completo'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
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
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item
                                    label={<p className='nilia-text-s'>Data de Nascimento</p>}
                                    labelCol={{ span: 24 }}
                                    name='dateOfBirth'
                                    className='input'
                                    rules={[{ required: true, message: 'Por favor, insira a data de nascimento' }]}
                                >
                                    <Input
                                        placeholder='Insira a data de nascimento'
                                        type='date'
                                        style={{ marginTop: -10 }}
                                        className='input-form'
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
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
                                        <Option className='nilia-text-s' value='Passaporte'>Passaporte</Option>
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
                                    rules={[{ required: true, message: 'Por favor, insira o contacto de chamadas' }]}
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
                                    rules={[{ required: true, message: 'Por favor, insira o contacto de WhatsApp' }]}
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
                                    rules={[{ required: true, message: 'Por favor, insira o email' }]}
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
                                    rules={[{ required: true, message: 'Por favor, insira o contacto de chamadas' }]}
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
                                    rules={[{ required: true, message: 'Por favor, insira o contacto de WhatsApp' }]}
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
                                    rules={[{ required: true, message: 'Por favor, insira o email' }]}
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
                    <NiliaButton text='Anterior' onClick={() => handleMenu(2)} />
                    <NiliaButton text='Próximo' onClick={handleFiliationData} />
                </div>
            </div>)}
            {current === 4 && (<div className='w-full flex flex-col gap-1'>
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
                                        rules={[{ required: true, message: 'Por favor, insira o contacto de chamadas' }]}
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
                                        name='guardianWhatsApp'
                                        className='input'
                                        rules={[{ required: true, message: 'Por favor, insira o contacto de WhatsApp' }]}
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
                                        rules={[{ required: true, message: 'Por favor, insira o email' }]}
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
                    <NiliaButton text='Anterior' onClick={() => handleMenu(3)} />
                    <NiliaButton text='Próximo' onClick={handleGuardianData} />
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
                        <Form.List name='emergencyContacts' initialValue={[{ name: '', relationship: '', phone: '' }]}>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                                        <Row gutter={16} key={key}>
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
                                                    rules={[{ required: true, message: 'Por favor, insira o parentesco' }]}
                                                >
                                                    <Input
                                                        placeholder='Insira o parentesco'
                                                        style={{ marginTop: -10 }}
                                                        className='input-form'
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={6}>
                                                <Form.Item
                                                    label={<p className='nilia-text-s'>Contacto de Chamadas</p>}
                                                    labelCol={{ span: 24 }}
                                                    name={[name, 'phone']}
                                                    className='input'
                                                    rules={[{ required: true, message: 'Por favor, insira o contacto de chamadas' }]}
                                                >
                                                    <Input
                                                        placeholder='Insira o contacto de chamadas'
                                                        prefix='+258'
                                                        style={{ marginTop: -10 }}
                                                        className='input-form'
                                                    />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <div className='ml-auto w-[fit-content] mt-3'>
                                                <NiliaButtonLight text='Adicionar Contacto' onClick={() => add()} />
                                            </div>
                                        </Col>
                                    </Row>
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
        </section>
    );
};
