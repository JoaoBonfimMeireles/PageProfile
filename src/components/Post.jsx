import style from './Post.module.css';

export function Post() {
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <img src="https://github.com/JoaoBonfimMeireles.png" alt="João meireles" />
                    <div className={style.authorInfo}>
                        <strong>João Meires</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                
                <time title="2023-07-16 01:18:00" dateTime="2023-07-16 01:18:00">Publicado há 1h
                </time>
            </header>
            
            <div className={style.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

               <p>👉{' '}<a href="#">jane.design/doctorcare</a> </p>

                <p>
                    <a href="#">#novoprojeto</a>{' '} 
                    <a href="">#nlw</a>{' '} 
                    <a href="">#rocketseat</a></p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feeback</strong>

                <textarea 
                placeholder="Deixei seu comentario"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>
        </article>
    )
}
