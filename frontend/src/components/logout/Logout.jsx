import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Logout = ({ buttonText }) => {  // Desestruturação correta
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    }

    return (
        <Button label={buttonText} onClick={logout} />
    );
}

export default Logout;
