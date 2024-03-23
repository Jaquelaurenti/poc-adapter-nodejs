// concreteApis/concreteApiClient.js

/**
 * Cliente para interagir com a API específica.
 */
 class ConcreteApiClient {
  /**
   * Retorna dados da API específica.
   * @returns {Promise<object>} Dados retornados pela API específica.
   */
  getData() {
    // Simulação de chamada à API específica
    return Promise.resolve({ data: 'Dados da API específica' });
  }
}

module.exports = ConcreteApiClient;
