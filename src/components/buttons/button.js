"use client";
import '../css/button.css'

export default function NiliaButton ({ text, onClick, navigate,loading }) {
    return (
        <button className='nilia-button' onClick={onClick || (navigate? () => window.location.href = navigate : null)}>
            {loading ? 'Carregando...' : text}
        </button>
    )
}
