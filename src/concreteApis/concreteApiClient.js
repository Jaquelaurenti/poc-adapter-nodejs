// concreteApis/concreteApiClient.js

const ConcreteApiAdapter = require('../adapters/concreteApiAdapter');

/**
 * Cliente para a API específica (API do Pokémon neste exemplo).
 */
class ConcreteApiClient {
  constructor() {
    this.apiAdapter = new ConcreteApiAdapter();
  }

  /**
   * Busca dados da API específica (API do Pokémon neste exemplo).
   * @returns {Promise<object>} Dados buscados da API específica.
   */
  async fetchData() {
    try {
      // Utilizando o adaptador para buscar os dados da API específica
      return await this.apiAdapter.fetchData();
    } catch (error) {
      // Em caso de erro, lançamos uma exceção
      throw new Error('Erro ao buscar dados da API específica: ' + error.message);
    }
  }
}

module.exports = ConcreteApiClient;
