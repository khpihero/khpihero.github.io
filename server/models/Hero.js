const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeroSchema = new mongoose.Schema({
  name: {type: String, required: true},
  cathedra: {type: String, required: true},
  dormitoryHelp: {type: Boolean, required: true},
  facebook: {type: String},
  telegram: {type: String},
  show: {type: Boolean, default: false},
  from: {type: String}
}, { timestamps: true });

module.exports  = mongoose.model('hero', HeroSchema);
