import React, { useState, useEffect } from "react"
import '../styles/styles.css';
import image from "../images/user4.jpg";

export const Perfil = () => {

    const [user, setUser] = useState([]);
    const userUrl = 'http://localhost:4000/api/user/2';

    const fetchData = () => {
        fetch(userUrl)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
                console.log(user)
            })
            //.then((data) => console.log(map.data(element => element.id)))
            .catch(error => console.log(error))
    }
    const [userPost, setUserPost] = useState([])
    const postFromUserUrl = 'http://localhost:4000/api/post/perfil/2';
    const postFromUser = () => {
        fetch(postFromUserUrl)
            .then(response => response.json())
            .then((dataPost) => {
                setUserPost(dataPost);
            })
            .catch(error => console.log(error))
    }


    useEffect(() => {
        fetchData()
        postFromUser()

    }, [])
    return (
        <section className="container-perfil">
            {user.map(result =>
                <div className="container-fotoDePortada"
                    style={{ backgroundImage: `url(require(${result.foto_de_portada}))` }}
                >
                    <div className="container-perfil-images">
                        <img className="fotoDePortada"
                            src={result.foto_de_portada}
                            alt=''
                        />

                        <di className="container-user-name">
                            <img className="fotoDePerfil"
                                src={result.foto_de_perfil}
                            />
                            <h3 className="user-name">{result.nombre}</h3>
                        </di>

                    </div>

                    <div className="user-info1">
                        <h3>INFO</h3>
                        <p>{result.nombre}</p>
                        <p>{result.apellido}</p>
                        <p>{result.edad}</p>
                    </div>

                </div>
            )}

            {userPost.map(post =>
                <div>
                    <div className="container-post">

                        <div className="head-post">
                            <img
                                className="fotoDePerfil-post"
                                src={post.foto_de_perfil}
                            />
                            <p className="nombreDePerfil-post">{post.nombre}</p>
                        </div>
                        <div className="container-imagen-post">
                            <img
                                className="imagen-post"
                                src={post.imagen}
                            />
                        </div>
                        <div className="container-contenido">
                            <h2>{post.titulo}</h2>
                            <p>{post.contenido}</p>
                        </div>
                        <div className="comentarios-count">
                            <div>👍{post.likes}</div>
                            <div >Comentarios</div>
                        </div>
                        <div className="comentarios-count">
                            <div>👍</div>
                            <div > 💬 Comentarios</div>
                            <div>✈️ Compartir</div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

