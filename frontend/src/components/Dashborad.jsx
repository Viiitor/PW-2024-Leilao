import React from "react";
import { useTranslation } from "react-i18next";
import "./Dashboard.css"; // Certifique-se de que o caminho está correto

const Dashboard = () => {
    const { t } = useTranslation();

    // Exemplo de dados (substitua com dados reais conforme necessário)
    const activeAuctions = 10;
    const recentlySoldItems = 5;
    const recentUsers = 3;
    const totalSales = 100000;

    return (
        <div className="dashboard">
            <div className="dashboard-item">
                <h2>{t('dashboard.activeAuctions')}</h2>
                <p>{activeAuctions}</p>
            </div>
            <div className="dashboard-item">
                <h2>{t('dashboard.recentlySoldItems')}</h2>
                <p>{recentlySoldItems}</p>
            </div>
            <div className="dashboard-item">
                <h2>{t('dashboard.recentUsers')}</h2>
                <p>{recentUsers}</p>
            </div>
            <div className="dashboard-item">
                <h2>{t('dashboard.totalSales')}</h2>
                <p>${totalSales.toLocaleString()}</p>
            </div>
        </div>
    );
}

export default Dashboard;
