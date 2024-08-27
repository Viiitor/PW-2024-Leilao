import React, { useTransition } from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout";
import { useTranslation } from "react-i18next";
import { Button } from "primereact/button";

const Home = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language)
    }


    return (
        <div className="home-container">

            {/* Conteúdo Principal */}
            <main className="main-content">
                <h1>{t('welcome')}</h1>
                <p>Bem-vindo ao sistema de leilões. Aqui você pode participar de leilões ao vivo, fazer ofertas e muito mais.</p>
                <button onClick={()=> changeLanguage('en')}>English</button>
                <button onClick={() => changeLanguage('pt')}>Português</button>
            </main>

            {/* Opção de Logout */}
            <div className="logout-button">
                <Logout />
            </div>

          
        </div>
    );
}

export default Home;

aaaaaaaaa