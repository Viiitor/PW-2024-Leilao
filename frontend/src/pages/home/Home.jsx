import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import Dashboard from "../../components/Dashborad";


const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <main className="main-content">
                <h1>{t('welcome')}</h1>
                <p>{t('home.intro')}</p>
                <Dashboard />
            </main>
        </div>
    );
}

export default Home;
