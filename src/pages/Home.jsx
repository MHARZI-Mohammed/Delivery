import React from "react";

const Home = () => {
  return (
    <div className="container-fluid all">
      <nav className="navbar navbar-expand-md nvbg">
        <div className="container">
          <a className="navbar-brand" href="/"><img className="logo" src="/assets/logo.jpg" alt="picture" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className=" mx-3 acc" href="/">Accueil</a>
              </li>
              <li className="nav-item mx-2">
                <a className="mx-1 acc" href="/login">Connexion</a>
              </li>
              <li className="nav-item">
                <a className="mx-1 acc" href="/register">Inscription</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5 data">
        <h1 className="title">Bienvenue sur FastDelivery</h1>
        <p className="para">Fournisseur de services logistiques intégrés axés sur l'humain</p>
        <a className="comm" href="/register">Commence maintenant</a>
      </div>
    </div>
  );
};

export default Home;