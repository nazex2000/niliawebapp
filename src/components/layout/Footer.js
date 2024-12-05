"use client";
import niliaLogo from "../../assets/logo/nilia.webp";
import "./css/Footer.css";
import "../css/text.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer gap-4">
            <p className="nilia-title-s text-underline" style={{textDecoration:'underline'}}>SERVIÇOS ADMINISTRATIVOS/SECRETARIA</p>
            <div className="footer-content">
                <div className="footer-card">
                    <Image src={niliaLogo} alt="Instituto Nilia" className="logo-footer" />
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Contatos</p>
                    <p className="nilia-text-xs">Email:
                        <a href="mailto:instituonilia@gmail.com" className="nilia-link">
                            secretaria@institutonilia.edu.mz
                        </a>
                    </p>
                    <p className="nilia-text-xs">Telefone:
                        <a href="tel:+258873037946" className="nilia-link">
                            +258873037946
                        </a>
                    </p>
                    <p className="nilia-text-xs">Telefone:
                        <a href="tel:+258823037946" className="nilia-link">
                            +258823037946
                        </a>
                    </p>
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Horário de Funcionamento</p>
                    <p className="nilia-text-xs">Segunda a Sexta: 07:30 - 15:00</p>
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Localização</p>
                    <p className="nilia-text-xs">Av. Armando Tivane, 1581, Maputo</p>
                    <p className="nilia-text-xs">Av. F. Orlando Magumbwe, 837 Maputo</p>
                </div>
            </div>
            <p className="nilia-text-xs">© 2024 Instituto Nilia. Todos os direitos reservados. Desenvolvido por <a onClick={() => window.open("https://itcom.co.mz")} className="nilia-link">ITCOM</a>
            </p>
        </div>
    );
};

export default Footer;
