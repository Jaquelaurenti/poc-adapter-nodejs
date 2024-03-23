// adapters/concreteApiAdapter.js

class ConcreteApiAdapter {
  constructor(concreteApiClient) {
    this.concreteApiClient = concreteApiClient;
  }

  fetchData() {
    // Método que adapta a chamada à API específica
    // e retorna os dados de acordo com o contrato da sua aplicação
    // Aqui você faria a lógica de adaptação necessária
    return this.concreteApiClient.getData();
  }
}

module.exports = ConcreteApiAdapter;
