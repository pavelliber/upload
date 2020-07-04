import React from 'react';
import "./map-screen.css";
import MapTemp from "./map-temp";
import history from "../../services/history/history";


function MapScreen() {

    const clickHandler = () => {
        history.push("/booked/");
    }

    return (
        <div className="map-screen">
            <MapTemp />
            <button onClick={clickHandler}>Book Workplace</button>
        </div>
    );
}

export default MapScreen;
