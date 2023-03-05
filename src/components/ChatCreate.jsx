import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Mensajes from "./Mensajes";
const ChatCreate = () => {
    const params = useParams();
    const [body, setBody] = useState({ id_emisor: 1, id_receptor: params.id, mensaje_emisor: '' })
    const [myData, setMyData] = useState({})
    const [userReceptor, setUserReceptor] = useState([])
    const crearChatUrl = "http://localhost:4000/api/chat/enviar"

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({ ...body, [name]: value })

    }
    const usuarioReceptor = () => {
        fetch(`http://localhost:4000/api/users/chat/${params.id}`)
            .then(response => response.json())
            .then((data) => {
                setUserReceptor(data)
            }).catch(error => console.log(error))
    }
    const chatMessage = (e) => {
        fetch(crearChatUrl,
            {
                "method": "POST",
                "headers": { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            }).then((response) => response.json())
            .then(data => {
                setMyData(data)
                console.log(myData)
            })
        e.preventDefault()
        setBody({
            id_emisor: 1, id_receptor: params.id, mensaje_emisor: ''
        })

    }
    useEffect(() => {
        usuarioReceptor()
      }, [])
    return (
        <section className="chat-container">
            <div className="container-content-chat">
                <div className="container-list-perfil">
                    <div className="chat-user-info">
                        <p >formulario de crear Chat {params.id}</p>
                        <img
                            className="chat-user-info-image"
                            src={require("../images/programador.jpg")} />
                    </div>
                     {userReceptor.map(user2 =>
                        <div className="chat-list">
                            <p >{user2.nombre}</p>
                            <img
                                className="chat-user-info-image"
                                src={user2.foto_de_perfil} />
                        </div>
                    )} 

                </div>
                <div className="container-chat">
                     {/* <Mensajes />  */}
                    <form onSubmit={chatMessage}>
                        <input type="hidden" value={body.id_emisor} name=" id_emisor" onChange={inputChange} />
                        <input type="hidden" value={body.id_receptor} name="id_receptor" onChange={inputChange} />
                        <span>crear chat</span>
                        <input type="text" value={body.mensaje_emisor} name="mensaje_emisor" onChange={inputChange} />
                        <input className="login-button" type="submit" value="enviar"
                        />
                    </form>
                </div>
            </div>

        </section>

    )
}

export default ChatCreate;