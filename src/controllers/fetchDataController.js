// controllers/fetchDataController.js

const ConcreteApiClient = require('../concreteApis/concreteApiClient');
const DataModel = require('../models/dataModel');

/**
 * Controlador para buscar dados da API.
 */
class FetchDataController {
  constructor() {
    this.apiClient = new ConcreteApiClient();
  }

  /**
   * Manipulador para a rota de busca de dados.
   * @param {Object} req - Objeto de requisição.
   * @param {Object} res - Objeto de resposta.
   * @param {Function} next - Função de callback para o próximo middleware.
   */
  async fetchData(req, res, next) {
    try {
      // Busca os dados da API específica
      const rawData = await this.apiClient.fetchData();
      // Formata os dados utilizando o modelo de dados
      const formattedData = new DataModel(rawData);
      // Retorna os dados formatados como resposta
      res.json(formattedData);
    } catch (error) {
      // Se ocorrer um erro, chama o próximo middleware de tratamento de erro
      next(error);
    }
  }
}

module.exports = new FetchDataController();
