import Image from "next/image";
import "../css/nav.css";
export default function NiliaNav({ imageBg, title, text }) {
    return (
        <section className='nilia-nav'>
            <Image src={imageBg} alt={text} className='nilia-nav-image' />
            <div className='nilia-nav-container'>
                <div className="nilia-nav-innercontainer">
                    <div className="nilia-badge">
                        {title}
                    </div>
                    <p className="nilia-title-l title-border font-white">
                        {text}
                    </p>
                </div>
            </div>
        </section>
    );
}