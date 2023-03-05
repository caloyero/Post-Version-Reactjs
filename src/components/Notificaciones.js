
import React, { useState, useEffect } from "react";
import "../styles/styles.css";

export const Notificaciones = () => {

    const [notificacion, setNotificacion] = useState([]);
    const [user, setUser] = useState([]);
    const [idUser, setIdUser] = useState([]);
    const notificacionUrl = 'http://localhost:4000/api/post/notificaciones/1';
    const userNotificacionesUrl = 'http://localhost:4000/api/user/' + idUser;

    const fetchData = () => {
        fetch(notificacionUrl)
            .then(response => response.json())
            .then((data) => {
                setNotificacion(data);
            })
            .catch(error => console.log(error))
    }
    const fetchUserNotificaciones = () => {
        fetch(userNotificacionesUrl)
            .then(response => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
        fetchUserNotificaciones()
    }, [idUser])

    return (
        <section>
            <div className="notificaciones">
                {notificacion.map(nts =>
                    <div className="container-notificaciones">
                            <div>
                                <img
                                    className="fotoDePerfil-post"
                                    src={nts.foto_de_perfil}
                                /> 
                                <p className="notificacion-reaccion">👍</p>
                            </div>
                               
                                <div className="notificacion-text">
                                <p className="user-text-post"> {nts.nombre} </p>
                                    <p className="notificacion-parrafo">Reacciono a tu post</p>
                                </div>
                               
                    </div>

                )}

            </div>
        </section>

    )
}