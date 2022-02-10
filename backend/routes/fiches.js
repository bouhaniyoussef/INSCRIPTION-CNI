const express = require('express');
const router = express.Router();

const ficheController = require('../controllers/fiches')

router.get('/', ficheController.all);
router.get('/:id', ficheController.get);
router.post('/', ficheController.create);
router.put('/:id', ficheController.update);
router.delete('/:id', ficheController.delete);

module.exports = router;
