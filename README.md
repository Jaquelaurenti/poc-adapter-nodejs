
## API com Adapter Pattern
Este é um exemplo de uma API simples construída em Node.js que utiliza o padrão de projeto Adapter para 
adaptar diferentes fontes de dados.

Conceito do Adapter
O Adapter é um padrão de projeto estrutural que permite que objetos com interfaces incompatíveis possam 
colaborar entre si. Ele atua como um intermediário que traduz a interface de uma classe em outra interface 
que o cliente espera encontrar. Isso permite que objetos com interfaces diferentes possam ser usados juntos.

Neste exemplo, utilizamos o padrão Adapter para adaptar diferentes APIs externas (como a API do Pokémon) para que possamos consumir seus dados de forma uniforme em nossa aplicação.

### Estrutura de Pastas e Arquivos
A estrutura de pastas e arquivos da aplicação é a seguinte:

adapters/: Contém os adaptadores que traduzem as interfaces das APIs externas para interfaces que nossa aplicação espera encontrar.
concreteApis/: Contém classes que representam clientes para APIs específicas.
controllers/: Contém controladores que lidam com as requisições HTTP e chamam os casos de uso correspondentes.
externalApis/: Contém classes que representam clientes para APIs externas genéricas.
models/: Contém definições de modelos de dados.
routes/: Contém os arquivos de definição de rotas para a API.
useCases/: Contém os casos de uso da aplicação.


### Como Testar
Para testar a aplicação, siga estas etapas:
```
Certifique-se de ter o Node.js e o npm instalados em sua máquina.
Clone este repositório para o seu ambiente local.
Execute npm install para instalar todas as dependências do projeto.
Inicie o servidor executando node app.js ou npm start.
Abra um navegador da web e acesse http://localhost:3000/api-docs para visualizar a documentação Swagger da API. (swagger esta quebrando)
Utilize ferramentas como o Postman para enviar requisições HTTP para as rotas da API e testar o funcionamento.
```
