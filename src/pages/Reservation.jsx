import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "../services/localStorage";
import "./Reservation.css";

const Reservation = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]); 
  const [selectedService, setSelectedService] = useState("");
  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    address: "",
    date: "",
  });

  useEffect(() => {
    const storedServices = getFromLocalStorage("services") || [];
    setServices(storedServices);
  }, []);

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationDetails({...reservationDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService || !reservationDetails.name || !reservationDetails.Ville || !reservationDetails.date) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    const reservation = {
      serviceId: selectedService,
      ...reservationDetails,
      status: "En attente",
    };

    const reservations = getFromLocalStorage("reservations") || [];
    reservations.push(reservation);
    saveToLocalStorage("reservations", reservations);
    navigate("/ListReservation");
  };

  return (
    <div className="all">
      <h1>Réserver un Service de Livraison</h1>
      <form className="bagform" onSubmit={handleSubmit}>
        <div>
          <label>Service de Livraison</label>
          <select value={selectedService} onChange={handleServiceChange}>
            <option value="">Sélectionnez un service</option>
            <option value="Colis">Colis</option>
            <option value="Bagage">Bagage</option>
            <option value="Dossier">Dossier</option>
          </select>
        </div>
        <div>
          <label>Nom</label>
          <input type="text" name="name" value={reservationDetails.name} onChange={handleInputChange} placeholder="Votre nom"/>
        </div>
        <div>
          <label>Ville</label>
          <input type="text" name="Ville" value={reservationDetails.Ville} onChange={handleInputChange} placeholder="Ville"/>
        </div>
        <div>
          <label>Date de Livraison</label>
          <input type="date" name="date"value={reservationDetails.date} onChange={handleInputChange}/>
        </div>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reservation;