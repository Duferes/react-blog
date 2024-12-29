import './Post.css'
import styles from './Post.module.css'

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo";
import ReactMardown from "react-markdown";
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

const Post = () => {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);
    

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element ={
                    <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMardown>
                                {post.texto}
                            </ReactMardown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post}/>
                            </li>
                        ))}
                    </ul>

                    </PostModelo>
                }/>
            </Route>
        </Routes>
    )
}

export default Post