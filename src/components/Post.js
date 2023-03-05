import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';

import "../styles/styles.css";
import { Comentarios } from "./Comentarios";
//import { useState } from "react";

export function Postlist() {

  const [postList, setPost] = useState([]);
  const postUrl = 'http://localhost:4000/api/post';
  const fetchData = () => {
    fetch(postUrl)
      .then(response => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch(error => console.log(error))
  }

  const listUserUrl = 'http://localhost:4000/api/user';
  const [userList, setUserList] = useState([]);
  const fechUserList = () => {
    fetch(listUserUrl)
      .then(response => response.json())
      .then((data) => {
        setUserList(data);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchData()
    fechUserList()
  }, [

  ])

  return (
    <section className="container-home">
      <div className="user-home">
        <h2>Contactos</h2>
        {userList.map(user =>
          <div className="user-home-list">
            <Link to= {`/Chat/create/${user.id}`}>
              <img
                className="chat-user-info-image"
                src={user.foto_de_perfil} />
              <div>{user.nombre}</div>
            </Link>
          </div>
        )}</div>
      <div className="container-list">
        {postList.map(post =>
          <div className="container-post">
            <div className="head-post">
              <img
                className="fotoDePerfil-post"
                src={post.foto_de_perfil}
              />
              <p className="user-text-post">{post.nombre}</p>
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
              <div>👍 {post.likes}</div>
              <div >Comentarios</div>
            </div>
            <div className="comentarios-count">
              {/*  <Router> */}
              <ul>
                <div>👍</div>
                <div >
                  <li>
                    <Link className="" to='/comentarios'>💬 Comentarios</Link>
                  </li>
                </div>
                <div>✈️ Compartir</div>
              </ul>
              {/*  <Switch>
              <Route path='/comentarios' element={<Comentarios />} />
            </Switch>  */}
              {/*   <Routes>
                <Route path='/comentarios' element={<Login />} />
              </Routes> */}
              {/*  </Router> */}

            </div>
          </div>


        )}</div>
    </section>

  );
}

/* <div className="container-post">
      <section className="user-info">
        <img
          className="post-image"
          src={require("../images/programador.jpg")}
          alt="foto de perfil"
        />
        <h2>User name</h2>
        <div className="post-text">
        <h3 className="post-title">titulo Post</h3>
        <p className="post-content">Contenido del post</p>
      </div>
      </section>
      <section className="user-info">
        <img
          className="post-image"
          src={require("../images/user1.jpg")}
          alt="foto de perfil"
        />
        <h2>User name</h2>
        <div className="post-text">
        <h3 className="post-title">titulo Post</h3>
        <p className="post-content">Contenido del post</p>
      </div>
      </section>
    </div> */
