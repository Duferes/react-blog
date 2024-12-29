import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo"
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/eu.jpg'

const SobreMim = () => {
    return(
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim"> 
            <h3 className={styles.subtitulo}>
                Olá, meu nome é Eduardo!
            </h3>

            <img src={fotoSobreMim} alt='Eduardo Feres' className={styles.fotoSobreMim}></img>

            <p className={styles.paragrafo}>
                Desenvolvedor Web em constante evolução,
                apaixonado por programação e com muita vontade de contribuir com projetos que façam a diferença na vida das pessoas.
            </p>
            <p className={styles.paragrafo}>
                Com experiência em HTML, CSS e JavaScript, estou trabalhando e me especializando nos frameworks ReactJS e NextJS,
                e gostando muito de me atualizar nesse universo.
            </p>
            <p className={styles.paragrafo}>Estou sempre buscando aprender novas ferramentas e metodologias para criar soluções inovadoras.
                Minha jornada no desenvolvimento é guiada por um desejo de transformar ideias em realidades digitais eficientes e funcionais
                de forma a fazer a diferença e ser reconhecido.
            </p>
            <p className={styles.paragrafo}>Se você está em busca de uma pessoa que está comprometida em melhorar 1% todos os dias,
                com comprometimento nos projetos envolvidos, então se conecte comigo,
                será um prazer em trocar ideias e compartilhar experiências.
            </p>
            
        </PostModelo>
    )
}

export default SobreMim