// adapters/externalApiAdapter.js

const axios = require('axios');

/**
 * Adaptador para interagir com uma API externa genérica.
 */
class ExternalApiAdapter {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  /**
   * Busca dados da API externa.
   * @returns {Promise<object>} Dados buscados da API externa.
   */
  async fetchData() {
    try {
      // Fazendo uma chamada GET à API externa
      const response = await axios.get(this.apiUrl);
      // Retornando os dados obtidos da API
      return response.data;
    } catch (error) {
      // Em caso de erro, lançamos uma exceção
      throw new Error('Erro ao buscar dados da API externa: ' + error.message);
    }
  }
}

module.exports = ExternalApiAdapter;
