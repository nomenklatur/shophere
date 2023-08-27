import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../css/leaflet-custom.css";

export default function LeafletMap () {

    return (
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" 
                className="px-5"
            />
        </MapContainer>
    );
}