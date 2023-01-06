import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';

function Login () {

    useEffect (() => {
        if (localStorage.getItem ('user-info')) {
            history.push ("/add")
        }
    },[]);

    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const history = useHistory ();

    async function login () {

        let item = {email, password};
        console.log (item);

        let result = await fetch ("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            },
            body: JSON.stringify (item)
        });

        result = await result.json ();
        localStorage.setItem ("user-info", JSON.stringify (result));
        history.push ("/add")
    }

    return (
        <div>
            <Header />
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <br />
                    <input type="text" placeholder="email" 
                    value={email} onChange={(e) => setEmail (e.target.value)}  className="form-control" />
                <br />
                    <input type="password" placeholder="password" 
                    value={password} onChange={(e) => setPassword (e.target.value)} className="form-control" />
                <br />
                    <button onClick={login} className="btn btn-primary">Login</button>
                <br />
            </div>
        </div>
    )
}

export default Login;