import React, { useState } from "react";
import '../styles/styles.css';
import { Postlist } from "./Post";
const Login = () => {

    const [body, setBody] = useState({ email: '', password: '' });
    const [myLogin, setMyLogin] = useState('false')
    const [midata, setData] = useState({})

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({ ...body, [name]: value })

    }

    const onSubmit = (e) => {
        fetch("http://localhost:4000/api/user/aunt", body)
            .then(({ data }) => { console.log(data) })
            .catch(({ reponse }) => { console.log(reponse) })
        e.preventDefault();
        console.log(body)
        /*
        
        alert(body.password)
        setBody({...body, email: '', password: ''}) */

    }


    const loginUser = (e) => {
        /*  valitator(body) */
        fetch("http://localhost:4000/api/user/aunt", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((response) => response.json())
            .then(data => {
                setData(data);
                loging(midata)
            }
            )

        e.preventDefault();
        setBody({
            email: '',
            password: ''
        })

    }
    const valitator = (body) => {
        let countEmail = Object.keys(body.email).length
        let countPassword = Object.keys(body.password).length
        console.log(midata)

        if (countEmail === 0 || countPassword === 0) {
            return alert('todos los campos deben ser Completados')
        }


    }
    const loging = (p) => {
        console.log(p)

        if (p.length === 0) {
            alert('El Usuario No Es Valido')
        }
        else {
            if (p.length > 0) {
                alert('El Usuario es Valido')
                setMyLogin('true')
                document.getElementById('login').style.display = 'none'

            }
        }
    }

    /*  const handleSubmit = (e) => {
         e.preventDefault();
         loginUser(
             email,
             password
         )
     }; */





    return (
        <section>
            <form id="login" className="login" onSubmit={loginUser}
            >
                <img
                    className="logo-login"
                    src={require("../images/logo.png")}
                    alt="foto de perfil"
                />

                <input className="input" type="text" placeholder="Email"
                    value={body.email}
                    name="email"
                    onChange={inputChange}
                    required
                />


                <input className="input" type="password" placeholder="Password"
                    value={body.password}
                    onChange={inputChange}
                    name="password"
                    required
                />

                <input className="login-button" type="submit" value="Login"

                />
            </form>
            {myLogin === 'true' && <Postlist />}
        </section>

    );
}

export default Login;