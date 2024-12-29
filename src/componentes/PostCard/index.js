import { Link } from 'react-router'
import styles from './Post.module.css'
import Botao from 'componentes/Botao'

const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                
                <img className={styles.capa} src={`/assets/posts/${post.id}/capa.png`} alt='imagem de capa' />

                <h2 className={styles.titulo}> {post.titulo} </h2>

                <Botao>Ler</Botao>
            </div>
        </Link>
    )
}

export default PostCard