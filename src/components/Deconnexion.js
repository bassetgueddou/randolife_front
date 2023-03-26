import React, { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/auth";
import './style/_Deconnexion.css';


const Deconnexion = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate("/");
    }, [logout, navigate]);

    return <div>Déconnexion en cours...</div>;
};

export default Deconnexion;
