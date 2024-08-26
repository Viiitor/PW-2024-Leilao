import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import './Profile.css'; // Para estilização

const Profile = () => {
    const navigate = useNavigate(); // Cria a função de navegação
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        address: '',
        profilePhoto: null,
    });

    const [errors, setErrors] = useState({});

    const validateCPF = (cpf) => {
        // Função de validação de CPF (exemplo básico)
        cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

        if (cpf.length !== 11) return false;

        let sum = 0;
        let remainder;

        for (let i = 1; i <= 9; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (11 - i);
        }

        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11) remainder = 0;

        if (remainder !== parseInt(cpf.charAt(9))) return false;

        sum = 0;

        for (let i = 1; i <= 10; i++) {
            sum += parseInt(cpf.charAt(i - 1)) * (12 - i);
        }

        remainder = (sum * 10) % 11;

        if (remainder === 10 || remainder === 11) remainder = 0;

        if (remainder !== parseInt(cpf.charAt(10))) return false;

        return true;
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.name) errors.name = 'Nome é obrigatório';
        if (!validateCPF(formData.cpf)) errors.cpf = 'CPF inválido';
        if (!formData.address) errors.address = 'Endereço é obrigatório';

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Processar o envio dos dados
            console.log('Formulário enviado com sucesso!', formData);
        }
    };

    return (
        <div className="profile-container">
            <h1>Editar Perfil</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        placeholder="Digite seu CPF"
                    />
                    {errors.cpf && <span className="error">{errors.cpf}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Endereço Completo:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Digite seu endereço completo"
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="profilePhoto">Foto de Perfil:</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>

                <div className="form-actions">
                    <button type="submit">Salvar Alterações</button>
                    <button type="button" onClick={() => navigate(-1)} className="cancel-button">Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;
