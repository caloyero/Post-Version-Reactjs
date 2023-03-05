import React from "react";
import '../styles/styles.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import HomeContent from "./HomeContent";
import { Perfil } from "./Perfil";
import { Postlist } from "./Post";
import { Notificaciones } from "./Notificaciones";
import Login from "./Login";
import { Chat } from "./Chat";
import ChatCreate from "./ChatCreate";

function Menu() {
    /* return (
        <nav>
            <Router>
                <Route path="/" render={() => <HomeContent />} />
                <Route path="/about" component={Perfil} />
                <Route path="/" component={<HomeContent />} />
            </Router>
        </nav>
    ) */

    return (

        <Router>
            <nav>
            <img
                className="logo-menu"
                src={require("../images/logo.png")}
                alt="foto de perfil"
            />

                <Link className="link" to='/home'>
                <img
                    className="icon"
                    src={require("../images/home.png")}
                /></Link>
                <Link  className="link" to='/usuario'>
                <img
                    className="icon"
                    src={require("../images/usuario.png")}
                />
                </Link>
                <Link  className="link" to='notificaciones'>
                <img
                    className="icon"
                    src={require("../images/campana-de-notificacion.png")}
                />
                </Link>
                <Link  className="link" to='Chat'>
                <img
                    className="icon"
                    src={require("../images/chat (1).png")}
                />
                </Link>
            </nav>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path='/home' element={<Postlist/>}/>
                <Route path='/usuario' element={<Perfil/>}/>
                <Route path='/notificaciones' element={<Notificaciones/>}/>
                <Route path='/Chat' element={<Chat/>}/>
                <Route path='/Chat/create/:id' element={<ChatCreate/>}/>
            </Routes>
            {/*   <Switch>
                <Route exact path="/home">
                    <HomeContent/>
                </Route>
                <Route exact path="/home">
                    <Perfil/>
                </Route>
                <Route exact path="/home">
                    <Postlist/>
                </Route>
            </Switch> */}
        </Router>

    )
}
export default Menu;