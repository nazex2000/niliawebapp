"use client";
import '../css/card.css'
import Image from 'next/image'

export default function OfferCard({ bgImg, title, href}) {
    return (
        <div className='offer-card'>
            <Image
                src={bgImg}
                alt={title}
                className='offer-card-image'
            />
            <div className='offer-card-content'>
                <p className='offer-card-text'>{title}</p>
                <button className='offer-card-button' onClick={() => window.location.href = href}>
                    Saiba mais</button>
            </div>
        </div>
    )
}