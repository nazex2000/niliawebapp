import niliaLogo from "../../assets/logo/nilia.webp";
import "./css/Footer.css";
import "../css/text.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className="footer gap-12">
            <div className="footer-content">
                <div className="footer-card">
                    <Image src={niliaLogo} alt="Instituto Nilia" className="logo-footer" />
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Contatos</p>
                    <p className="nilia-text-xs">Email:  
                        <a href="mailto:instituonilia@gmail.com" className="nilia-link">
                            instituonilia@gmail.com
                        </a>
                    </p>
                    <p className="nilia-text-xs">Telefone:  
                        <a href="tel:+258 84 123 4567" className="nilia-link">
                            +258 84 123 4567
                        </a>
                    </p>
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Horário de Funcionamento</p>
                    <p className="nilia-text-xs">Segunda a Sexta: 08:00 - 17:00</p>
                    <p className="nilia-text-xs">Sábado: 08:00 - 12:00</p>
                </div>
                <div className="footer-card">
                    <p className="nilia-title-xs">Localização</p>
                    <p className="nilia-text-xs">Av. Armando Tivane, 1581, Maputo</p>
                    <p className="nilia-text-xs">Av. F. Orlando Magumbwe, 837 Maputo</p>
                </div>
            </div>
            <p className="nilia-text-xs">© 2024 Instituto Nilia. Todos os direitos reservados. Desenvolvido por <a href="https://itcom.co.mz" className="nilia-link">ITCOM</a></p>
        </div>
    );
};

export default Footer;
