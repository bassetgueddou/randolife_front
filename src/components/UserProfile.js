// src/components/UserProfile.js
import React from 'react';

const UserProfile = (props) => {
    const { user } = props;

    return (
        <div className="user-profile">
            <h2>Profil utilisateur</h2>
            <div className="user-details">
                <div className="user-avatar">
                    <img src={user.photo_profil || 'default-avatar.png'} alt="avatar" />
                </div>
                <div className="user-info">
                    <p><strong>Nom d'utilisateur : </strong>{user.username}</p>
                    <p><strong>Email : </strong>{user.email}</p>
                    <p><strong>Date de naissance : </strong>{user.date_naissance}</p>
                    <p><strong>Préférences : </strong>{user.preferences}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
