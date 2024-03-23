// adapters/externalApiAdapter.js

/**
 * Adaptador para interagir com a API externa.
 */
 class ExternalApiAdapter {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Busca dados da API externa.
   * @returns {Promise<object>} Dados buscados da API externa.
   */
  fetchData() {
    return this.apiClient.fetchDataFromExternalApi();
  }
}

module.exports = ExternalApiAdapter;
