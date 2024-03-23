// adapters/concreteApiAdapter.js

/**
 * Adaptador para interagir com a API específica.
 */
 class ConcreteApiAdapter {
  constructor(concreteApiClient) {
    this.concreteApiClient = concreteApiClient;
  }

  /**
   * Busca dados da API específica.
   * @returns {Promise<object>} Dados buscados da API específica.
   */
  fetchData() {
    return this.concreteApiClient.getData();
  }
}

module.exports = ConcreteApiAdapter;
