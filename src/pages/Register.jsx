import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "Le nom est requis.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "L'email est requis.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "L'email est invalide.";
    }
    if (!formData.password) {
      formErrors.password = "Le mot de passe est requis.";
    } else if (formData.password.length < 6) {
      formErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log("Form Data:", formData);
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/reservation");
    }
  };

  return (
    <div className="container-fluid all">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="card cart">
            <div className="card-body bagform">
              <h2 className="card-title text-center text-white">Inscription</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    id="name"
                    placeholder="Entrez votre nom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Entrez votre email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    id="password"
                    placeholder="Entrez votre mot de passe"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  S'inscrire
                </button>
              </form>
              <div className="text-center mt-3">
                <p className="text-white">
                  Déjà inscrit ? <a className="text-white" href="/login">Se connecter</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;