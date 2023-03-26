import React, { useState, useEffect } from "react";
import axios from "axios";
import './style/_UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/userProfile", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("userToken"),
                },
            })
            .then((response) => {
                setUser(response.data);
                setUpdatedUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleInputChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                "http://localhost:3001/api/userProfile",
                {
                    name: updatedUser.name,
                    email: updatedUser.email,
                    phone: updatedUser.phone,
                },
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("userToken"),
                    },
                }
            )
            .then((response) => {
                setUser(response.data);
                setEditMode(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {editMode ? (
                <div>
                    <h2>Mise à jour du profil</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Nom :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={updatedUser.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={updatedUser.email}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor="phone">Téléphone :</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={updatedUser.phone}
                            onChange={handleInputChange}
                        />
                        <br />
                        <button type="submit">Enregistrer</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Profil utilisateur</h2>
                    <p>Nom : {user.name}</p>
                    <p>Email : {user.email}</p>
                    <p>Téléphone : {user.phone}</p>
                </div>
            )}
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? "Annuler" : "Modifier le profil"}
            </button>
        </div>
    );
};

export default UserProfile;
