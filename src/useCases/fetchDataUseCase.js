// useCases/fetchDataUseCase.js

/**
 * Caso de uso para buscar dados.
 */
 class FetchDataUseCase {
  constructor(apiAdapter) {
    this.apiAdapter = apiAdapter;
  }

  /**
   * Executa o caso de uso para buscar dados.
   * @returns {Promise<object>} Dados buscados.
   */
  async execute() {
    try {
      return await this.apiAdapter.fetchData();
    } catch (error) {
      throw new Error('Erro ao buscar dados: ' + error.message);
    }
  }
}

module.exports = FetchDataUseCase;
