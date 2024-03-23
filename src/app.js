const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');

const app = express();

// Middleware para o corpo das requisições JSON
app.use(express.json());

// Configuração das rotas
app.use('/api', routes);

// Configuração do Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Exemplo de API com Swagger',
      description: 'Documentação da API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Arquivos que contêm as definições do Swagger
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
