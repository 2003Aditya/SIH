import mongoose from 'mongoose';

const navigationSchema = new mongoose.Schema({
  startLocation: String,
  endLocation: String,
  directions: [String],
});

const Navigation = mongoose.model('Navigation', navigationSchema);
export default Navigation;

