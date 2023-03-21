import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { login } = useContext(AuthContext);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://your-backend-url.com/register", {
                email,
                password,
                name,
            });

            if (response.status === 200) {
                login(response.data.token);
                history.push("/");
            }
        } catch (error) {
            setErrorMessage("Erreur lors de l'inscription.");
        }
    };

    return (
        <div>
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="name">Nom :</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button type="submit">S'inscrire</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
};

export default Inscription;
