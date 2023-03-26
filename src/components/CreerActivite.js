import React, { useState } from "react";
import './style/_CreerActivite.css';

function CreerActivite(props) {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique de création d'activité
        console.log("Création de l'activité :", titre, description, date);
        props.navigateToScreen("listeActivites");
    };

    return (
        <div>
            <h2>Créer une activité</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titre">Titre :</label>
                <input
                    type="text"
                    id="titre"
                    name="titre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="description">Description :</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <br />
                <label htmlFor="date">Date :</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Créer l'activité</button>
            </form>
            <button onClick={() => props.navigateToScreen("listeActivites")}>
                Retour à la liste des activités
            </button>
        </div>
    );
}

export default CreerActivite;
