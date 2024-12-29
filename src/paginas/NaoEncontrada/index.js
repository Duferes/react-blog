import Botao from 'componentes/Botao'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router'

const NaoEncontrada = () => {
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>
                    404
                </span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza que era isso que estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarre a página, ou volte para a página inicial.
                </p>

                <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                    <Botao tamanho="lg">
                        Voltar
                    </Botao>
                </div>

                <img src={erro404} alt='Foto do cachorro de erro' className={styles.imagemCachorro}/>
            </div>

            <div className={styles.espacoEmBranco}>

            </div>
        </>
    )
}

export default NaoEncontrada