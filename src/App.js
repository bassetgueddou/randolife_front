import React, { useState } from "react";
import "./App.css";
import Connexion from "./components/Connexion";
import Inscription from "./components/Inscription";
import CreerActivite from "./components/CreerActivite";
import ListeActivites from "./components/ListeActivites";
import UserProfile from "./components/UserProfile";
import Deconnexion from "./components/Deconnexion";

function App() {
  const [currentScreen, setCurrentScreen] = useState("connexion");

  const navigateToScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "connexion":
        return <Connexion navigateToScreen={navigateToScreen} />;
      case "inscription":
        return <Inscription navigateToScreen={navigateToScreen} />;
      case "creerActivite":
        return <CreerActivite navigateToScreen={navigateToScreen} />;
      case "listeActivites":
        return <ListeActivites navigateToScreen={navigateToScreen} />;
      case "userProfile":
        return <UserProfile navigateToScreen={navigateToScreen} />;
      case "deconnexion":
        return <Deconnexion navigateToScreen={navigateToScreen} />;
      default:
        return <Connexion navigateToScreen={navigateToScreen} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RandoLife</h1>
      </header>
      <main>{renderCurrentScreen()}</main>
    </div>
  );
}

export default App;
