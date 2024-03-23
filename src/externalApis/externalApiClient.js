// externalApis/externalApiClient.js

/**
 * @swagger
 * components:
 *   schemas:
 *     ExternalApiResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: string
 */

/**
 * Cliente para interagir com a API externa.
 */
 class ExternalApiClient {
  /**
   * Retorna dados da API externa.
   * @returns {Promise<object>} Dados retornados pela API externa.
   */
  fetchDataFromExternalApi() {
    // Simulação de chamada à API externa
    return Promise.resolve({ data: 'Dados da API externa' });
  }
}

module.exports = ExternalApiClient;
