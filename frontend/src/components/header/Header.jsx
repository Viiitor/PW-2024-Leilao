import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <nav className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#auctions">Leilões</a></li>
                    <li><a href="#bids">Minhas Ofertas</a></li>
                    <li><a href="/profile">Perfil</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
