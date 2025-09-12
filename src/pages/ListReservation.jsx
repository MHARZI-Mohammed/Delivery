import React, { useState, useEffect } from "react";
import { getFromLocalStorage } from "../services/localStorage";
import MapReservations from "../components/MapReservations";

const ListReservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = getFromLocalStorage("reservations") || [];
    setReservations(storedReservations);
  }, []);

  return (
    <div >
      <h1>Liste des Réservations</h1>
      {reservations.length === 0 ? (
        <p>Aucune réservation n'a été trouvée.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Ville</th>
              <th>Date de Livraison</th>
              <th>Service</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.name}</td>
                <td>{reservation.Ville}</td>
                <td>{reservation.date}</td>
                <td>{reservation.serviceId}</td>
                <td>{reservation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <MapReservations/>
    </div>
  );
};

export default ListReservation;