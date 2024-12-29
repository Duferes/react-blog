import styles from './Banner.module.css'
import minhaFoto from 'assets/perfil_full.png'

const Banner = () => {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao blog pessoal !
                </p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Foto'/>
            </div>
        </div>
    )
}

export default Banner