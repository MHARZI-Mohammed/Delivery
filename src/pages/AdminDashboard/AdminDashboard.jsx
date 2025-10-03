import React, { useState, useEffect } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../services/localStorage";

const AdminDashboard = () => {
  const [services, setServices] = useState([]); 
  const [reservations, setReservations] = useState([]); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedServices = getFromLocalStorage("services") || [];
    const storedReservations = getFromLocalStorage("reservations") || [];
    const storedUsers = getFromLocalStorage("users") || [];
    setServices(storedServices);
    setReservations(storedReservations);
    setUsers(storedUsers);
  }, []);

  const handleDeleteService = (serviceId) => {
    const updatedServices = services.filter((service) => service.id !== serviceId);
    setServices(updatedServices);
    saveToLocalStorage("services", updatedServices);
  };

  const totalServices = services.length;
  const totalReservations = reservations.length;
  const totalRevenue = reservations.reduce((sum, reservation) => sum + (reservation.status === "Confirmé" ? 10 : 0), 0);

  return (
    <div>
      <h1>Tableau de Bord Administrateur</h1>
      <div>
        <div>
          <h2>Annonces</h2>
          <p>{totalServices}</p>
        </div>
        <div>
          <h2>Réservations</h2>
          <p>{totalReservations}</p>
        </div>
        <div>
          <h2>Revenus</h2>
          <p>{totalRevenue}MAD</p>
        </div>
      </div>
      <h2>Gestion des Annonces</h2>
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleDeleteService(service.id)}>Supprimer</button>
          </div>
        ))}
      </div>
      <h2>Réservations</h2>
      <div>
        {reservations.map((reservation, index) => (
          <div key={index}>
            <h3>Réservation #{index + 1}</h3>
            <p>Service ID: {reservation.serviceId}</p>
            <p>Nom: {reservation.name}</p>
            <p>Adresse: {reservation.address}</p>
            <p>Date: {reservation.date}</p>
            <p>Statut: {reservation.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;