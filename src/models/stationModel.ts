import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
  name: String,
  location: String,
  layout: mongoose.Schema.Types.Mixed,
});

const Station = mongoose.model('Station', stationSchema);
export default Station;

