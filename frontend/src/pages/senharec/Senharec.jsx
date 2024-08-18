import React from "react";
import "./Senharec.css";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Senharec = () => {

    return (
        <div className="senha-rec-container">
            <Card title="Recuperar Senha" className="senha-rec-card">
                <div className="field">
                    <label htmlFor="email">E-mail </label>
                    <InputText id="email" aria-describedby="email-help" />
                </div> 

                <div className="buttons">
                    <Button label="Cancelar" className="p-button-secondary" />
                    <Button label="Recuperar a Senha" className="p-button-primary" />
                </div>
            </Card>
        </div>
    );
}

export default Senharec;
