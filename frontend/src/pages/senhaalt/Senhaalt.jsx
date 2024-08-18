import React from "react";
import "./Senhaalt.css";
import { Card } from "primereact/card";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Senhaalt = () => {

    return (
        <div className="senha-alt-container">
            <Card title="Alterar Senha" className="senha-alt-card">
                <div className="field">
                    <label htmlFor="senha">Senha </label>
                    <Password id="senha" aria-describedby="senha-help" />
                </div>

                <div className="field">
                    <label htmlFor="confirm-senha">Confirme sua Senha </label>
                    <Password id="confirm-senha" aria-describedby="confirm-senha-help" />
                </div>

                <div className="buttons">
                    <Button label="Cancelar" className="p-button-secondary" />
                    <Button label="Confirmar" className="p-button-primary" />
                </div>
            </Card>
        </div>
    );
}

export default Senhaalt;
