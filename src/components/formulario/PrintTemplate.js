import React from 'react';
import Image from 'next/image';
import nilia_logo from "../../assets/logo/nilia.webp";

const RELATIONSHIP_LABELS = {
    'avo': 'Avô/Avó',
    'tio': 'Tio/Tia',
    'primo': 'Primo/Prima',
    'padrinho': 'Padrinho/Madrinha',
    'vizinho': 'Vizinho',
    'amigo': 'Amigo da Família',
    'outro': 'Outro'
};

const PrintTemplate = ({ data, form }) => {
    const getLevelName = (level) => {
        switch(level) {
            case 0: return "Pré-Escolar";
            case 1: return "1ª Classe";
            case 2: return "2ª Classe";
            case 3: return "3ª Classe";
            case 4: return "4ª Classe";
            case 5: return "5ª Classe";
            case 6: return "6ª Classe";
            case 7: return "7ª Classe";
            case 8: return "8ª Classe";
            case 9: return "9ª Classe";
            case 10: return "10ª Classe";
            case 11: return "11ª Classe";
            case 12: return "12ª Classe";
            default: return "";
        }
    }

    return (
        <div className="print-container">
            {/* Cabeçalho */}
            <div className="print-header">
                <div className="print-logo">
                    <Image src={nilia_logo} alt="Instituto Nilia" width={100} height={100} />
                </div>
                <div className="print-title">
                    <h1>Formulário de Inscrição</h1>
                    <h2>{getLevelName(data.level)}</h2>
                </div>
            </div>

            {/* Dados do Aluno */}
            <section className="print-section">
                <h3>1. Dados do Aluno</h3>
                <div className="print-grid">
                    <div className="print-field">
                        <label>Nome Completo:</label>
                        <p>{form.getFieldValue('name')}</p>
                    </div>
                    <div className="print-field">
                        <label>Data de Nascimento:</label>
                        <p>{form.getFieldValue('dateOfBirth') || ''}</p>
                    </div>
                    <div className="print-field">
                        <label>Género:</label>
                        <p>{form.getFieldValue('gender') === 'M' ? 'Masculino' : 'Feminino'}</p>
                    </div>
                    <div className="print-field">
                        <label>Local de Nascimento:</label>
                        <p>{form.getFieldValue('birthPlace')}</p>
                    </div>
                    <div className="print-field">
                        <label>Província:</label>
                        <p>{form.getFieldValue('province')}</p>
                    </div>
                    <div className="print-field">
                        <label>Documento de Identificação:</label>
                        <p>{form.getFieldValue('documentType')} - {form.getFieldValue('documentNumber')}</p>
                    </div>
                    <div className="print-field">
                        <label>Morada:</label>
                        <p>{form.getFieldValue('address')}, Nº {form.getFieldValue('addressNumber')}, {form.getFieldValue('addressFlat')}</p>
                    </div>
                </div>
            </section>

            {/* Filiação */}
            <section className="print-section">
                <h3>2. Filiação</h3>
                <div className="print-subsection">
                    <h4>Pai</h4>
                    <div className="print-grid">
                        <div className="print-field">
                            <label>Nome:</label>
                            <p>{form.getFieldValue('fatherName')}</p>
                        </div>
                        <div className="print-field">
                            <label>Profissão:</label>
                            <p>{form.getFieldValue('fatherProfession')}</p>
                        </div>
                        <div className="print-field">
                            <label>Local de Trabalho:</label>
                            <p>{form.getFieldValue('fatherWorkPlace')}</p>
                        </div>
                        <div className="print-field">
                            <label>Contacto:</label>
                            <p>{form.getFieldValue('fatherPhone')}</p>
                        </div>
                        <div className="print-field">
                            <label>WhatsApp:</label>
                            <p>{form.getFieldValue('fatherWhatsApp')}</p>
                        </div>
                        <div className="print-field">
                            <label>Morada:</label>
                            <p>{form.getFieldValue('fatherAddress')}</p>
                        </div>
                        <div className="print-field">
                            <label>Serviço:</label>
                            <p>{form.getFieldValue('fatherAddressService')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email:</label>
                            <p>{form.getFieldValue('fatherEmail')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email Alternativo:</label>
                            <p>{form.getFieldValue('fatherAlternativeEmail') || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                <div className="print-subsection">
                    <h4>Mãe</h4>
                    <div className="print-grid">
                        <div className="print-field">
                            <label>Nome:</label>
                            <p>{form.getFieldValue('motherName')}</p>
                        </div>
                        <div className="print-field">
                            <label>Profissão:</label>
                            <p>{form.getFieldValue('motherProfession')}</p>
                        </div>
                        <div className="print-field">
                            <label>Local de Trabalho:</label>
                            <p>{form.getFieldValue('motherWorkPlace')}</p>
                        </div>
                        <div className="print-field">
                            <label>Contacto:</label>
                            <p>{form.getFieldValue('motherPhone')}</p>
                        </div>
                        <div className="print-field">
                            <label>WhatsApp:</label>
                            <p>{form.getFieldValue('motherWhatsApp')}</p>
                        </div>
                        <div className="print-field">
                            <label>Morada:</label>
                            <p>{form.getFieldValue('motherAddress')}</p>
                        </div>
                        <div className="print-field">
                            <label>Serviço:</label>
                            <p>{form.getFieldValue('motherAddressService')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email:</label>
                            <p>{form.getFieldValue('motherEmail')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email Alternativo:</label>
                            <p>{form.getFieldValue('motherAlternativeEmail') || 'N/A'}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Encarregado de Educação */}
            <section className="print-section">
                <h3>3. Encarregado de Educação</h3>
                <div className="print-field">
                    <label>Responsável pela Educação:</label>
                    <p>{(() => {
                        switch(form.getFieldValue('educationGuardian')) {
                            case 'parents': return 'Pai e Mãe';
                            case 'father': return 'Pai';
                            case 'mother': return 'Mãe';
                            case 'other': return 'Outro';
                            default: return 'Não especificado';
                        }
                    })()}</p>
                </div>

                {form.getFieldValue('educationGuardian') === 'other' && (
                    <div className="print-grid">
                        <div className="print-field">
                            <label>Nome:</label>
                            <p>{form.getFieldValue('guardianName')}</p>
                        </div>
                        <div className="print-field">
                            <label>Profissão:</label>
                            <p>{form.getFieldValue('guardianProfession')}</p>
                        </div>
                        <div className="print-field">
                            <label>Local de Trabalho:</label>
                            <p>{form.getFieldValue('guardianWorkPlace')}</p>
                        </div>
                        <div className="print-field">
                            <label>Contacto:</label>
                            <p>{form.getFieldValue('guardianPhone')}</p>
                        </div>
                        <div className="print-field">
                            <label>WhatsApp:</label>
                            <p>{form.getFieldValue('guardianWhatsApp')}</p>
                        </div>
                        <div className="print-field">
                            <label>Morada:</label>
                            <p>{form.getFieldValue('guardianAddress')}</p>
                        </div>
                        <div className="print-field">
                            <label>Serviço:</label>
                            <p>{form.getFieldValue('guardianAddressService')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email:</label>
                            <p>{form.getFieldValue('guardianEmail')}</p>
                        </div>
                        <div className="print-field">
                            <label>Email Alternativo:</label>
                            <p>{form.getFieldValue('guardianAlternativeEmail') || 'N/A'}</p>
                        </div>
                    </div>
                )}
            </section>

            {/* Contactos de Emergência */}
            <section className="print-section">
                <h3>4. Contactos de Emergência</h3>
                {form.getFieldValue('emergencyContacts')?.map((contact, index) => (
                    <div key={index} className="print-grid">
                        <div className="print-field">
                            <label>Nome:</label>
                            <p>{contact.name}</p>
                        </div>
                        <div className="print-field">
                            <label>Parentesco:</label>
                            <p>{RELATIONSHIP_LABELS[contact.relationship] || contact.relationship}</p>
                        </div>
                        <div className="print-field">
                            <label>Contacto:</label>
                            <p>{contact.phone}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Histórico Académico */}
            <section className="print-section">
                <h3>5. Histórico Académico</h3>
                {form.getFieldValue('academicHistory')?.map((history, index) => (
                    <div key={index} className="print-grid">
                        <div className="print-field">
                            <label>Ano Lectivo:</label>
                            <p>{history.year}</p>
                        </div>
                        <div className="print-field">
                            <label>Classe:</label>
                            <p>{history.class}ª Classe</p>
                        </div>
                        <div className="print-field">
                            <label>Escola:</label>
                            <p>{history.school}</p>
                        </div>
                        <div className="print-field">
                            <label>Morada da Escola:</label>
                            <p>{history.schoolAddress}</p>
                        </div>
                        <div className="print-field">
                            <label>Nota Final:</label>
                            <p>{history.finalGrade} valores</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* Informação Adicional */}
            <section className="print-section">
                <h3>6. Informação Adicional</h3>
                <div className="print-grid">
                    <div className="print-field">
                        <label>Doenças Crónicas:</label>
                        <p>{form.getFieldValue('chronicDiseases') || 'Nenhuma'}</p>
                    </div>
                    <div className="print-field">
                        <label>Alergias:</label>
                        <p>{form.getFieldValue('allergies') || 'Nenhuma'}</p>
                    </div>
                    <div className="print-field">
                        <label>Deficiências:</label>
                        <p>{form.getFieldValue('disabilities') || 'Nenhuma'}</p>
                    </div>
                    <div className="print-field">
                        <label>Seguros:</label>
                        <p>{form.getFieldValue('insurances') || 'Nenhum'}</p>
                    </div>
                    <div className="print-field">
                        <label>Irmãos na Escola:</label>
                        <p>{form.getFieldValue('siblings') || 'Não'}</p>
                    </div>
                    <div className="print-field">
                        <label>Órfão:</label>
                        <p>{(() => {
                            switch(form.getFieldValue('orphan')) {
                                case 'parents': return 'De Pai e Mãe';
                                case 'father': return 'Apenas de Pai';
                                case 'mother': return 'Apenas de Mãe';
                                case 'no': return 'Não';
                                default: return 'Não especificado';
                            }
                        })()}</p>
                    </div>
                </div>
                {form.getFieldValue('observations') && (
                    <div className="print-field">
                        <label>Observações:</label>
                        <p>{form.getFieldValue('observations')}</p>
                    </div>
                )}
            </section>

            {/* Rodapé */}
            <div className="print-footer">
                <p>Data: {new Date().toLocaleDateString('pt-PT', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                })}</p>
                <div className="print-signatures">
                    <div className="signature-line">
                        <p>_____________________________</p>
                        <p>Encarregado de Educação</p>
                    </div>
                    <div className="signature-line">
                        <p>_____________________________</p>
                        <p>Secretaria</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrintTemplate; 