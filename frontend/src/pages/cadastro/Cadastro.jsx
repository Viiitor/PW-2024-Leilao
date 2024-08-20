import React from "react";
import "./Cadastro.css";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";


const cancelar = () => {
    navigate("/login")
}

const Cadastro = () => {

    return (
        <div className="cadastro-container">
            <Card title="Novo Cadastro" className="cadastro-card">
                <div className="field">
                    <label htmlFor="nome">Nome </label>
                    <InputText id="nome" aria-describedby="nome-help" />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail </label>
                    <InputText id="email" aria-describedby="email-help" />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha </label>
                    <Password id="password" aria-describedby="password" />
                </div>

                <div className="field">
                    <label htmlFor="confirm-password">Confirme sua Senha </label>
                    <Password id="confirm-password" aria-describedby="confirm-password" />
                </div>

                <div className="buttons">
                    <Button label="Cadastrar-se" className="p-button-primary" />
                    <Button label="Cadastrar-se com Github" className="p-button-secondary" />
                    <Button onClick={cancelar} label="Cancelar Cadastro" className="p-button-secondary" />
                </div>
            </Card>
        </div>
    );
}


export default Cadastro;
