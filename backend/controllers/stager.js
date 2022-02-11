const Stager = require('../models/Stager');





//*Highlights     les router after i tested




//todo get all stagers
exports.all = (req, res) => {
  Stager.find()
    .then(stagers=> res.status(200).json(stagers))
    .catch(err => res.status(400).json({error: err.message}));
};

//todo get a stager by id
exports.get = (req, res, next) => {
  Stager.findOne({ _id: req.params.id })
      .then(stager => res.status(200).json(stager))
      .catch(error => res.status(404).json({ error }));
  };

  //todo store a new stager
exports.create = (req, res, next) => {
  console.log(req.body);
  const stager = new Stager({
    ...req.body
  });
  stager.save()
    .then(() => res.status(200).json({ message: 'Stager created  !'}))
    .catch(error => res.status(400).json({ error }));
};

//todo update a stager by id
exports.update = (req, res, next) => {
  Stager.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Stager updated !'}))
    .catch(error => res.status(400).json({ error }));
};

//todo delete a stager by id
exports.delete = (req, res, next) => {
  Stager.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Stager deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
