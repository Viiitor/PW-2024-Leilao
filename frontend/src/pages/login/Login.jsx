import React, { useState } from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Login = () => {
    const [user, setUser] = useState({email:"", password:""}); 
    const navigate = useNavigate();


    const handleChange = (input) =>{
        setUser({...user, [input.target.name]:input.target.value});
    }

    const login = () =>{
        //chamaria o backend para buscar as credenciais
    if (user.email == "teste@gmail.com" && user.password == "123"){
        let token="token do backend"
        localStorage.setItem("token",token);
        localStorage.setItem("email", user.email);
        navigate("/");
    }else {
        alert("usuário ou senha incorretos");
    }
    }

    const cadastro = () => {
        navigate("/cadastro")
    }

    const senharec = () => {
        navigate("/senharec")
    }

    return (
        <div className="login-container">
            <Card title="Login" className="login-card">
                
                <div className="field">
                    <label htmlFor="email">E-mail </label>
                    <InputText onChange={handleChange} name="email" id="email" className="" />
                </div> 

                <div className="field">
                    <label htmlFor="password">Senha </label>
                    <Password onChange={handleChange} name="password" id="password" className="" />
                </div> 

                <div className="buttons">
                    <Button onClick={login} label="Login" className="p-button-primary" />
                    <Button onClick={cadastro} label="Cadastre-se" className="p-button-secondary" />
                    <Button onClick={senharec} label="Recuperar Senha" className="p-button-secondary" />
                </div>

            </Card>
        </div>
    );
}

export default Login;

/*label = { t('login') }*/