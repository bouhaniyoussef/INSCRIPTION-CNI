const mongoose = require('mongoose');
const { DateFormatter } = require('ngx-bootstrap');

const stagerSchema = new mongoose.Schema({
  nom:      {type: String, required: true},
  cin:      {type: Number, required: true},
  datenais: {type: String, required: true},
  niv:      {type: String, required: true},
  tel:      {type: Number, required: true},
  etab:     {type: String, required: true},
  org:      {type: String, required: true},
  typstage: {type: String, required: true},
  sujet:    {type: String, required: false},
  datedeb:  {type: String, required: true},
  datefin:  {type: String, required: true},
  pay:      {type: Boolean, required: false},
  mont:     {type: Number, required: false},
});

module.exports = mongoose.model('Stager', stagerSchema);


