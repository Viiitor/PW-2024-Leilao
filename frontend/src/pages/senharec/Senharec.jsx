import React from "react";
import "./Senharec.css";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Senharec = () => {

    const navigate = useNavigate();

    const cancelar = () => {
        navigate("/login");
    }


    return (
        <div className="senha-rec-container">
            <Card title="Recuperar Senha" className="senha-rec-card">
                <div className="field">
                    <label htmlFor="email">E-mail </label>
                    <InputText id="email" aria-describedby="email-help" />
                </div> 

                <div className="buttons">
                    <Button label="Recuperar a Senha" className="p-button-primary" />
                    <Button onClick={cancelar} label="Cancelar" className="p-button-secondary" />
                </div>
            </Card>
        </div>
    );
}

export default Senharec;
