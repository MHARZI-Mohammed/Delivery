import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "../services/localStorage";
// import "./Reservation.css";

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
      alert("Please fill in all fields.");
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
      <h1>Book a Delivery Service</h1>
      <form className="bagform" onSubmit={handleSubmit}>
        <div>
          <label>Delivery Service</label>
          <select value={selectedService} onChange={handleServiceChange}>
            <option value="">Select a service</option>
            <option value="Colis">Package</option>
            <option value="Bagage">Luggage</option>
            <option value="Dossier">Case</option>
          </select>
        </div>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={reservationDetails.name} onChange={handleInputChange} placeholder="Your name"/>
        </div>
        <div>
          <label>City</label>
          <input type="text" name="Ville" value={reservationDetails.Ville} onChange={handleInputChange} placeholder="City"/>
        </div>
        <div>
          <label>Delivery date</label>
          <input type="date" name="date"value={reservationDetails.date} onChange={handleInputChange}/>
        </div>
        <button type="submit">To book</button>
      </form>
    </div>
  );
};

export default Reservation;