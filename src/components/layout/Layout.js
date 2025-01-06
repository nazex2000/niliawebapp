// components/Layout.js
"use client"
import Header from './Header';
import Footer from './Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FloatingWhatsApp
        phoneNumber="+258823062080"
        accountName="Instituto Nília"
        avatar="https://institutonilia.edu.mz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnilia.21efec9a.webp&w=64&q=75"
        chatMessage="Olá! Como podemos ajudar?"
        darkMode={false}
      />
      <a
        href="mailto:secretaria@institutonilia.edu.mz"
        className="floating-email"
        title="Envie-nos um e-mail"
      >
        📧
      </a>
      <Footer />
    </>
  );
};

export default Layout;
