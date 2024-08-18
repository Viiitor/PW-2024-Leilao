import React from "react";
import Header from './header/Header';
import Footer from './footer/Footer';

const DefaltLayout = ({children}) => {

    return(
        <>
        <Header/>
        {children}
        <Footer/>
        </>
    );
}
export default DefaltLayout;


/*instalar primereact*/ 