const path = require('path');
const carsModel = require('../models/cars-model');

const CarsController = () => {};

CarsController.index = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
};

CarsController.getAll = (req, res) => {
  carsModel.getAll((err, data) => {
    if (err) {
      res.send('Error en la base de datos');
    } else {
      res.json(data);
    }
  });
};

CarsController.add = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/add.html'));
};

CarsController.insert = (req, res) => {
  req.body.ano = Number(req.body.ano);
  carsModel.insert(req.body, (err) => {
    if (err) {
      console.log('Error al insertar informacion');
    } else {
      res.redirect('/');
    }
  });
};

CarsController.edit = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/edit.html'));
};

/*
CarsController.getOne = (req, res) => {};
CarsController.update = (req, res) => {};
CarsController.delete = (req, res) => {};
*/

module.exports = CarsController;
