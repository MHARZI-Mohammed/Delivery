import React from "react";

const Home = () => {
  return (
    <div className="all">
      <nav className="nvbg">
        <div>
          <a href="/">
            <img className="logo" src="/assets/logo.jpg" alt="picture" />
          </a>
          <button type="button" aria-label="Toggle navigation">
            <span></span>
          </button>
          <div>
            <ul>
              <li>
                <a className="acc" href="/">Accueil</a>
              </li>
              <li>
                <a className="acc" href="/login">Connexion</a>
              </li>
              <li>
                <a className="acc" href="/register">Inscription</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="data">
        <h1 className="title">Bienvenue sur FastDelivery</h1>
        <p className="para">
          Fournisseur de services logistiques intégrés axés sur l'humain
        </p>
        <a className="comm" href="/register">Commence maintenant</a>
      </div>
    </div>
  );
};

export default Home;