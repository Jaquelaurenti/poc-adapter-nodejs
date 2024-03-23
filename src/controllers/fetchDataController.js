// controllers/fetchDataController.js

const DataModel = require('../models/dataModel');
const fetchDataUseCase = require('../useCases/fetchDataUseCase')

class FetchDataController {
  constructor(fetchDataUseCase) {
    this.fetchDataUseCase = fetchDataUseCase;
  }

  async fetchData(req, res) {
    try {
      const data = await this.fetchDataUseCase.execute();
      const formattedData = new DataModel(data); // Utilizando o modelo de dados
      res.json(formattedData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FetchDataController(fetchDataUseCase);
