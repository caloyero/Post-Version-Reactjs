import React, { useEffect, useState } from "react";
import Emisor from "./ChatUser";
import Mensajes from "./Mensajes";

export const Chat = () => {
    const [messages, setMassages] = useState('')

    const [user, setUser] = useState([]);
    const userUrl = `http://localhost:4000/api/users/chat/${1}`;

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

    const handleSubmitMessage = (e) => {
        e.preventDefault();
        console.log(messages)
        setMassages(e.target.value)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <section className="chat-container">
            <div className="container-content-chat">
                <div className="container-list-perfil">
                {user.map(userChat => 
                    <div className="chat-user-info">
                        <p>{userChat.nombre}</p>
                        <img
                            className="chat-user-info-image"
                            src={userChat.foto_de_perfil}
                            alt="" />
                    </div>
                )}
                   
                    <Emisor/>
                </div>
                <div className="container-chat">

                    <Mensajes />
                    <form onSubmit={handleSubmitMessage}>
                        <input type="text" onChange={e => setMassages(e.target.value)} />
                        <button>
                            <img src={require("../images/directo.png")}
                                alt="" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}