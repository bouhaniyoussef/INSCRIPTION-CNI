const Fiche = require('./../models/fiches');

// get all fiches
exports.all = (req, res) => {
  Fiche.find()
    .then(fiches=> res.status(200).json(fiches))
    .catch(err => res.status(400).json({error: err.message}));
};

// get a course by id
exports.get = (req, res, next) => {
  Fiche.findOne({ _id: req.params.id })
      .then(course => res.status(200).json(course))
      .catch(error => res.status(404).json({ error }));
  };

  // store a new course
exports.create = (req, res, next) => {
  const course = new Fiche({
    ...req.body
  });
  course.save()
    .then(() => res.status(201).json({ message: 'Fiche created  !'}))
    .catch(error => res.status(400).json({ error }));
};

// update a course by id
exports.update = (req, res, next) => {
  Fiche.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Fiche updated !'}))
    .catch(error => res.status(400).json({ error }));
};

// delete a course by id
exports.delete = (req, res, next) => {
  Fiche.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Fiche deleted !'}))
    .catch(error => res.status(400).json({ error }));
};
