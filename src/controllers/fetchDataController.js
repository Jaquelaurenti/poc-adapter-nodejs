// controllers/fetchDataController.js

const DataModel = require('../models/dataModel');
const fetchDataUseCase = require('../useCases/fetchDataUseCase')

class FetchDataController {
  constructor(fetchDataUseCase) {
    this.fetchDataUseCase = fetchDataUseCase;
  }


  async fetchData(req, res, next) {
    try {
      const data = await this.fetchDataUseCase.execute();
      const formattedData = new DataModel(data); // Utilizando o modelo de dados
      res.json(formattedData);
    } catch (error) {
      next(error);
    }
  }
  
}

module.exports = new FetchDataController(fetchDataUseCase);
