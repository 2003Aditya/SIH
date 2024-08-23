import { Request, Response } from 'express';

// Mock data
const stations = [
  { id: 1, name: 'Station A', layout: 'Layout A' },
  // more mock data...
];

export const getStations = (req: Request, res: Response) => {
  res.json(stations);
};

export const getStationById = (req: Request, res: Response) => {
  const station = stations.find(st => st.id === parseInt(req.params.id));
  res.json(station);
};

export const addOrUpdateStation = (req: Request, res: Response) => {
  // Logic to add or update a station
  res.send('Station added/updated');
};

