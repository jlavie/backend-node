const express = require('express');
const router = express.Router();
const stuffController = require('../controllers/stuff');

router.get('/', stuffController.getAllThing);
router.get('/:id', stuffController.getOneThing);
router.delete('/:id', stuffController.deleteThing);
router.put('/:id', stuffController.updateThing);
router.post('/', stuffController.createThing);
  
module.exports = router;