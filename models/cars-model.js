const dbConnection = require('./db-connection');

const CarsModel = () => {};

CarsModel.getAll = (callBack) => {
  dbConnection.query('SELECT * FROM cars', callBack);
};

CarsModel.insert = (data, callBack) => {
  dbConnection.query('INSERT INTO cars SET ?', data, callBack);
};

CarsModel.getOne = () => {};

CarsModel.update = () => {};

CarsModel.delete = () => {};

module.exports = CarsModel;
