"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
    iconUrl: "/lugar.png",
    iconSize: [30, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface MapaProps {
    position: [number, number];
}

export default function Mapa({ position }: MapaProps) {
    return (
        <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={false}
            className="w-full h-full rounded-2xl shadow-lg"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>📍 Meu Ponto Comercial</Popup>
            </Marker>
        </MapContainer>
    );
}
