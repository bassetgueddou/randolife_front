import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import Inscription from './components/Inscription';
import Connexion from './components/Connexion';
import Deconnexion from './components/Deconnexion';

function App() {
  // Créez un état pour stocker les informations de l'utilisateur
  const [user, setUser] = useState(null);

  // Cette fonction met à jour les informations de l'utilisateur
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Cette fonction déconnecte l'utilisateur
  const logout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <h1>Randolife</h1>
      {user ? (
        <>
          <UserProfile user={user} />
          <Deconnexion logout={logout} />
        </>
      ) : (
        <>
          <Inscription updateUser={updateUser} />
          <Connexion updateUser={updateUser} />
        </>
      )}
    </div>
  );
}

export default App;
