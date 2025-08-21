import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const PropertyMap = ({ projects }) => {
  const mapRef = useRef(null);
  const defaultCenter = [20.5937, 78.9629]; // Center of India
  const zoom = 5;

  useEffect(() => {
    if (mapRef.current && projects?.length > 0) {
      const map = mapRef.current;
      const bounds = L.latLngBounds(
        projects.map(project => project.coordinates)
      );
      map.flyToBounds(bounds, { padding: [50, 50] });
    }
  }, [projects]);

  return (
    <div className="map-container" style={{ height: '500px', width: '100%', margin: '20px 0', borderRadius: '8px', overflow: 'hidden' }}>
      <MapContainer
        center={defaultCenter}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
        zoomControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {projects?.map((project, index) => (
          <Marker
            key={index}
            position={project.coordinates}
            icon={DefaultIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.location}</p>
                <p className="text-sm font-medium text-blue-600">{project.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
