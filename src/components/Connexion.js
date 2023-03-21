import React, { useState } from 'react';
import axios from 'axios';

const Connexion = (props) => {
    const { updateUser } = props;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8000/api/v1/utilisateurs/connexion/',
                formData
            );
            console.log(response.data);
            updateUser(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password">Mot de passe:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Connexion;
