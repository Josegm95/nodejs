const express = require('express');
const CarsController = require('../controllers/cars-controller');

const router = express.Router();

router.get('/', CarsController.index);
router.get('/cars', CarsController.getAll);
router.get('/add', CarsController.add);
router.post('/add', CarsController.insert);
router.get('/edit', CarsController.edit);

module.exports = router;
