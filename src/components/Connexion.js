import React, { useState } from 'react';
import './Connexion.css';

function Connexion(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique de connexion
        console.log("Connexion en cours avec les identifiants :", email, password);
        props.navigateToScreen("listeActivites");
    };

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Se connecter</button>
            </form>
            <button onClick={() => props.navigateToScreen("inscription")}>
                Pas encore inscrit ? Inscrivez-vous !
            </button>
        </div>
    );
}

export default Connexion;
