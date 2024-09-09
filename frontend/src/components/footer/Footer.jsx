import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <p dangerouslySetInnerHTML={{ __html: t('footer.copyright') }} />
            <p>{t('footer.contact')}</p>
        </div>
    );
}

export default Footer;
