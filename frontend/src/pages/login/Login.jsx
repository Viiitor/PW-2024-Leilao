import React from "react";
import "./Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Login = () => {

    return (
        <div className="login-container">
            <Card title="Login" className="login-card">
                
                <div className="field">
                    <label htmlFor="email">E-mail </label>
                    <InputText id="email" aria-describedby="email-help" />
                </div> 

                <div className="field">
                    <label htmlFor="password">Senha </label>
                    <Password id="password" aria-describedby="password" />
                </div> 

                <div className="buttons">
                    <Button label="Login" className="p-button-primary" />
                    <Button label="Cadastre-se" className="p-button-secondary" />
                    <Button label="Recuperar Senha" className="p-button-secondary" />
                </div>

            </Card>
        </div>
    );
}

export default Login;
