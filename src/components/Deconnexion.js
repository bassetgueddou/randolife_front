import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth";
import './Deconnexion.css';


const Deconnexion = () => {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        logout();
        history.push("/");
    }, [logout, history]);

    return <div>Déconnexion en cours...</div>;
};

export default Deconnexion;
