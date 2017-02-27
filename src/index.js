import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Leaflet from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

Leaflet.Icon.Default.imagePath = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.3/images/';

const position = [39.9528, -75.1638];

const map = (
    <Map center={position} zoom={12}>
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
