// concreteApis/concreteApiAdapter.js

const axios = require('axios');

/**
 * Adaptador para interagir com a API específica (API do Pokémon neste exemplo).
 */
class ConcreteApiAdapter {
  /**
   * Busca dados da API específica (API do Pokémon neste exemplo).
   * @returns {Promise<object>} Dados buscados da API específica.
   */
  async fetchData() {
    try {
      // Fazendo uma chamada GET à API do Pokémon para obter informações sobre um Pokémon específico (Charizard neste exemplo)
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/charizard');
      // Retornando os dados obtidos da API
      return response.data;
    } catch (error) {
      // Em caso de erro, lançamos uma exceção
      throw new Error('Erro ao buscar dados da API específica: ' + error.message);
    }
  }
}

module.exports = ConcreteApiAdapter;
