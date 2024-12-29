import styles from './Rodape.module.css'
import { ReactComponent as MarcaRegistrda } from 'assets/marca_registrada.svg'

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrda />

            Desenvolvido por Eduardo Feres
        </footer>
    )
}

export default Rodape