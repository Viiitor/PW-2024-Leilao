import React from "react";
import "./Home.css";
import Logout from "../../components/logout/Logout";

const Home = () => {

    return (
        <div className="home-container">

            {/* Conteúdo Principal */}
            <main className="main-content">
                <h1>Página Inicial</h1>
                <p>Bem-vindo ao sistema de leilões. Aqui você pode participar de leilões ao vivo, fazer ofertas e muito mais.</p>
            </main>

            {/* Opção de Logout */}
            <div className="logout-button">
                <Logout />
            </div>

          
        </div>
    );
}

export default Home;
