"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrUpdateStation = exports.getStationById = exports.getStations = void 0;
// Mock data
const stations = [
    { id: 1, name: 'Station A', layout: 'Layout A' },
    // more mock data...
];
const getStations = (req, res) => {
    res.json(stations);
};
exports.getStations = getStations;
const getStationById = (req, res) => {
    const station = stations.find(st => st.id === parseInt(req.params.id));
    res.json(station);
};
exports.getStationById = getStationById;
const addOrUpdateStation = (req, res) => {
    // Logic to add or update a station
    res.send('Station added/updated');
};
exports.addOrUpdateStation = addOrUpdateStation;
