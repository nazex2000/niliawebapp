"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import niliaLogo from "../../assets/logo/nilia.webp";
import { MdMenu, MdClose, MdFacebook } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "./css/Header.css";
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAdminPath, setIsAdminPath] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsAdminPath(pathname?.includes('/formulario'));
    }, [pathname]);

    const handleMenu = (path) => {
        router.push(path);
        setMenuOpen(false);
    }

    const goAdmin = () => {
        window.location.href = 'https://institutonilia.com/admin';
    }

    return (
        <div className={`header ${isAdminPath ? 'admin-header' : ''}`}>
            <div className="header-content">
                <div className="logo-container">
                    <Image 
                        src={niliaLogo} 
                        alt="Instituto Nilia" 
                        className="logo" 
                        onClick={() => router.push("/")} 
                    />
                </div>
                <nav className="nav-menu hidden md:flex">
                    <ul>
                        <li>
                            <a onClick={() => router.push("/")}>Home</a>
                        </li>
                        <li className="dropdown">
                            <a>O Instituto</a>
                            <div className="dropdown-menu">
                                <a onClick={() => router.push("/sobre")}>Sobre</a>
                                <a onClick={() => router.push("/sobre/nossa-equipa")}>Nossa Equipa</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a>Ensino</a>
                            <div className="dropdown-menu">
                                <a onClick={() => router.push("/ensino/pre-escolar")}>Pré-Escolar</a>
                                <a onClick={() => router.push("/ensino/primario")}>Primário</a>
                                <a onClick={() => router.push("/ensino/secundario")}>Secundário</a>
                            </div>
                        </li>
                        <li className="dropdown">
                            <a onClick={() => router.push("/admissoes")}>Admissões</a>
                        </li>
                        <li>
                            <a onClick={() => router.push("/galeria")}>Galeria</a>
                        </li>
                        <li>
                            <a onClick={() => router.push("/contactos")}>Contactos</a>
                        </li>
                        <button className="header-button ml-3" onClick={goAdmin}>Área Privada</button>
                    </ul>
                </nav>
                <div className="menu-icon md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? 
                        <MdClose className='cursor-pointer' color="white" size={30} /> : 
                        <MdMenu className='cursor-pointer' color="white" size={30} />
                    }
                </div>
                {menuOpen && (
                    <div className='menu-bar-mobile block md:hidden'>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/')}>Home</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/sobre')}>O Instituto</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/sobre/nossa-equipa')}>Nossa Equipa</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/ensino/primario')}>Ensino Primário</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/ensino/secundario')}>Ensino Secundário</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/admissoes')}>Admissões</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/admissoes#precario')}>Preçario</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/galeria')}>Galeria</p>
                        </p>
                        <p className='text-menu'>
                            <FaArrowRight size={17} color='#ff812e' />
                            <p className="nilia-text-m" onClick={() => handleMenu('/contactos')}>Contactos</p>
                        </p>
                        <div className='flex flex-row gap-2 mt-16'>
                            <MdFacebook size={30} color='#ff812e' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
