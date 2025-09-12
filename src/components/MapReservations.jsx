import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getFromLocalStorage } from "../services/localStorage";
import { useSelector } from "react-redux";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const citiesCoordinates = {
  "Casablanca": [33.5731, -7.5898],
  "Rabat": [34.0209, -6.8416],
  "Marrakech": [31.6295, -7.9811],
  "Tanger": [35.7595, -5.8340],
  "Fès": [34.0331, -5.0003],
  "Agadir": [30.4278, -9.5981],
  "Meknès": [33.8955, -5.5473],
  "Oujda": [34.6805, -1.9076],
  "Kenitra": [34.2610, -6.5802],
  "Tetouan": [35.5785, -5.3684],
  "Safi": [32.2994, -9.2372],
  "El Jadida": [33.2564, -8.5089],
  "Nador": [35.1688, -2.9335],
  "Khouribga": [32.8811, -6.9063],
  "Beni Mellal": [32.3372, -6.3498],
  "Larache": [35.1932, -6.1557],
  "Ksar El Kebir": [35.0027, -5.9038],
  "Taza": [34.2141, -3.9986],
  "Settat": [33.0010, -7.6165],
  "Azrou": [33.4347, -5.2212],
  "Ifrane": [33.5262, -5.1132],
  "Essaouira": [31.5125, -9.7743],
  "Al Hoceima": [35.2517, -3.9315],
  "Ouarzazate": [30.9189, -6.8934],
  "Errachidia": [31.9314, -4.4245],
  "Sidi Kacem": [34.2132, -5.7070],
  "Sidi Slimane": [34.2614, -5.9242],
  "Mohammedia": [33.6860, -7.3829],
  "Tiznit": [29.6969, -9.7316],
  "Guelmim": [28.9870, -10.0574],
  "Taroudant": [30.4681, -8.8766],
  "Laâyoune": [27.1489, -13.1990],
  "Dakhla": [23.6848, -15.9570]
};

const MapReservations = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = getFromLocalStorage("reservations") || [];
    setReservations(storedReservations);
  }, []);

  const getCityCoordinates = (city) => {
    return citiesCoordinates[city] || [0, 0];
  };

  return (
    <div>
      <h2>Carte des Réservations</h2>
      <MapContainer
        center={[33.5731, -7.5898]}
        zoom={6}
        style={{ height: "550px", width: "100%"}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {reservations.map((reservation, index) => {
          const cityCoords = getCityCoordinates(reservation.Ville);
          return (
            cityCoords[0] !== 0 && (
              <Marker key={index} position={cityCoords}>
                <Popup>
                  <div>
                    <h3>{reservation.name}</h3>
                    <p><strong>Service:</strong> {reservation.serviceId}</p>
                    <p><strong>Adresse:</strong> {reservation.address}</p>
                    <p><strong>Ville:</strong> {reservation.Ville}</p>
                    <p><strong>Date:</strong> {reservation.date}</p>
                    <p><strong>Statut:</strong> {reservation.status}</p>
                  </div>
                </Popup>
              </Marker>
            )
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapReservations;