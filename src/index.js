import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'leaflet';

const position = [51.505, -0.09];

const map = (
    <Map center={position} zoom={13}>
        <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
            <Popup>
                <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
            </Popup>
        </Marker>
    </Map>
);

ReactDOM.render(map,
    document.getElementById('react-main')
);
