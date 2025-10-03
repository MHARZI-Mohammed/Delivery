import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      navigate("/Reservation");
    } else {
      setError("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="container-fluid all">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card cart">
            <div className="card-body bagform">
              <h2 className="card-title text-center text-white">Connexion</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>

                {error && <p className="text-danger text-center">{error}</p>}

                <button type="submit" className="btn btn-primary w-100">
                  Se connecter
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="text-white">
                  Pas encore inscrit ? <a className="text-white" href="/register">Créer un compte</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;