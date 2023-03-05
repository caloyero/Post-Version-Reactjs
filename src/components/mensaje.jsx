import React, { useEffect, useState } from "react";

const Mensaje = (id) => {

    const urlChat = `http://localhost:4000/api/chat/3`;
    const [chat, setChat] = useState([])
    const fetchChat = () => {
        fetch(urlChat)
            .then(response => response.json())
            .then((data) => {
                setChat(data);
                console.log(chat);
            })
            .catch(error => console.log(error))
    }
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
    const [user2, setUser2] = useState([]);
    const user2Url = `http://localhost:4000/api/users/chat/${2}`;

    const fetchData2 = () => {
        fetch(user2Url)
            .then(response => response.json())
            .then((data) => {
                setUser2(data);
                console.log(user)
            })
            //.then((data) => console.log(map.data(element => element.id)))
            .catch(error => console.log(error))
    }



    useEffect(() => {
        fetchChat();
        fetchData();
        fetchData2();
    })
    return (
        <div className="miMensaje">
            <section>
                {chat.filter(chats => chats.id_emisor === 1).map(chats =>
                    <div className="container-mensaje-receptor">
                        {user.map(userChat =>
                            <img
                                alt=""
                                className="perfil-Chat"
                                src={userChat.foto_de_perfil} />
                        )}
                        <div className="container-mensaje-emi">
                            <p className="parrafo-receptor">{chats.mensaje_emisor}</p>
                        </div>
                    </div>)}
                {chat.filter(chats => chats.id_emisor !== 1).map(chats =>
                    <div className="container-mensaje-emisor">
                    {user2.map(user2chats =>
                        <img
                            alt=""
                            className="perfil-Chat"
                            src={user2chats.foto_de_perfil} />
                )}
                        <div className="container-mensaje-recep">
                            <p>{chats.mensaje_emisor}</p>
                        </div>
                    </div>
                )}
            </section>



        </div>
    )
}

export default Mensaje;