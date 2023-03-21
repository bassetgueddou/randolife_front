import React, { useState } from 'react';
import axios from 'axios';
import "frontend/src/App.css"


const Inscription = () => {
    const [formData, setFormData] = useState({
        username: '',
        password1: '',
        password2: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8000/api/v1/utilisateurs/inscription/',
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group"></div>
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password1">Mot de passe:</label>
                <input
                    type="password"
                    name="password1"
                    id="password1"
                    value={formData.password1}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="password2">Confirmer le mot de passe:</label>
                <input
                    type="password"
                    name="password2"
                    id="password2"
                    value={formData.password2}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">S'inscrire</button>

            </form>
        </div>
    );
};

export default Inscription;
