import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import { useTranslation } from 'react-i18next'; // Importa useTranslation
import Header from '../../components/header/Header'; // Importa o Header
import Footer from '../../components/footer/Footer'; // Importa o Footer
import './Profile.css'; // Para estilização

const Profile = () => {
    const navigate = useNavigate(); // Cria a função de navegação
    const { t } = useTranslation(); // Obtém a função de tradução

    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        address: '',
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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!formData.name) errors.name = t('profile.nameRequired');
        if (!validateCPF(formData.cpf)) errors.cpf = t('profile.cpfInvalid');
        if (!formData.address) errors.address = t('profile.addressRequired');

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Processar o envio dos dados
            console.log('Formulário enviado com sucesso!', formData);
        }
    };

    return (
        <>
            <Header />
            <div className="profile-container">
                <h1>{t('profile.title')}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{t('profile.name')}:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('profile.name')}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf">{t('profile.cpf')}:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            placeholder={t('profile.cpf')}
                        />
                        {errors.cpf && <span className="error">{errors.cpf}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">{t('profile.address')}:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder={t('profile.address')}
                        />
                        {errors.address && <span className="error">{errors.address}</span>}
                    </div>

                    <div className="form-actions">
                        <button type="submit">{t('profile.saveChanges')}</button>
                        <button type="button" onClick={() => navigate(-1)} className="cancel-button">{t('profile.cancel')}</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
