import '../css/button.css'

export default function NiliaButton ({ text, onClick, loading }) {
    return (
        <button className='nilia-button' onClick={onClick} disabled={loading}>
            {loading ? 'Carregando...' : text}
        </button>
    )
}
