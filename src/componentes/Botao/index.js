import styles from './Botao.module.css'

const Botao = ({ children, tamanho }) => {
    return (
        <button className={`${styles.botao} ${styles[tamanho]}`}>
            {children}
        </button>
    )
}

export default Botao