import '../css/button.css'

export default function NiliaButtonLight ({ text, onClick, loading }) {
    return (
        <button className='nilia-button-2' onClick={onClick} disabled={loading}>
            {loading ? 'Carregando...' : text}
        </button>
    )
}
