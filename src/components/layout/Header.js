"use client";
import { useState } from "react";
import Image from "next/image";
import niliaLogo from "../../assets/logo/nilia.webp";
import "./css/Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo-container">
                    <Image src={niliaLogo} alt="Instituto Nilia" className="logo" onClick={() => window.location.href = "/"} />
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="dropdown">
                            <a >O Instituto</a>
                            <div className="dropdown-menu">
                                <a href="/sobre">Sobre</a>
                                <a href="/sobre/nossa-equipa">Nossa Equipe</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a>Ensino</a>
                            <div className="dropdown-menu">
                                <a href="/ensino/primario">Primário</a>
                                <a href="/ensino/secundario">Secundário</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a>Admissões</a>
                            <div className="dropdown-menu">
                                <a href="/admissoes">Processo de Inscrição</a>
                                <a href="/admissoes#precario">Preçario</a>
                            </div>
                        </li>
                        <li>
                            <a href="/contactos">Contactos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
