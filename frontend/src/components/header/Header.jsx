import React from "react";
import "./Header.css";
import Logout from "../../components/logout/Logout";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="header">
            <div className="language-buttons">
                <button onClick={() => changeLanguage('en')}>En</button>
                <button onClick={() => changeLanguage('pt')}>Pt</button>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="/">{t('header.home')}</a></li>
                    <li><a href="#auctions">{t('header.auctions')}</a></li>
                    <li><a href="#bids">{t('header.bids')}</a></li>
                    <li><a href="/profile">{t('header.profile')}</a></li>
                    <li><a href="#contact">{t('header.contact')}</a></li>
                </ul>
            </nav>
            <div className="logout-button">
                <Logout buttonText={t('header.logout')} />
            </div>
        </div>
    );
}

export default Header;
