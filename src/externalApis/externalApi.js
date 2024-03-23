// adapters/externalApiAdapter.js

class ExternalApiAdapter {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  fetchData() {
    // Método que adapta a chamada à API externa
    // e retorna os dados de acordo com o contrato da sua aplicação
    // Aqui você faria a lógica de adaptação necessária
    return this.apiClient.fetchDataFromExternalApi();
  }
}

module.exports = ExternalApiAdapter;
