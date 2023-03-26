import React, { useState } from "react";
import Navbar from "./components/common/navbar";
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
      <Navbar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Bienvenue sur RandoLife !</h1>
          <p className="lead">
            Notre plateforme vise à connecter des personnes partageant les mêmes centres d'intérêt et à leur offrir la possibilité de découvrir des activités passionnantes en groupe.
          </p>
        </div>
        <h2>Types d'activités</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">Sorties</li>
          <li className="list-group-item">Randonnées</li>
          <li className="list-group-item">Soirées</li>
          <li className="list-group-item">Activités sportives</li>
          <li className="list-group-item">Festivals</li>
          <li className="list-group-item">Voyages et randonnées</li>
          <li className="list-group-item">Pique-niques et apéros</li>
          <li className="list-group-item">Restaurants et soirées</li>
          <li className="list-group-item">Cinémas et concerts</li>
          <li className="list-group-item">Danses et sports</li>
          <li className="list-group-item">Jeux de société et jeux en plein air</li>
        </ul>
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary btn-block" onClick={() => navigateToScreen("creerActivite")}>
              Créer une activité
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-secondary btn-block" onClick={() => navigateToScreen("listeActivites")}>
              Voir les activités
            </button>
          </div>
        </div>
      </div>
      {renderCurrentScreen()}
    </div>
  );
}

export default App;
