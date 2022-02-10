const mongoose = require('mongoose');

const ficheSchema = new mongoose.Schema({
  nom:      {type: String, required: true},
  cin:      {type: Number, required: true},
  datenais: {type: Date, required: true},
  niv:      {type: String, required: true},
  tel:      {type: Number, required: true},
  etab:     {type: String, required: true},
  org:      {type: String, required: true},
  typstage: {type: String, required: true},
  sujet:    {type: String, required: true},
  datedeb:  {type: Date, required: true},
  datefin:  {type: Date, required: true},
  pay:      {type: Boolean, required: true},
  mont:     {type: Number, required: true},
});

module.exports = mongoose.model('Fiche', ficheSchema);
