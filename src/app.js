// app.js

const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');

const app = express();

// Middleware para o corpo das requisições JSON
app.use(express.json());

// Configuração das rotas
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  
  // Configuração do Swagger com um pequeno atraso para dar tempo ao servidor de iniciar
  setTimeout(() => {
    const swaggerOptions = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Exemplo de API com Swagger',
          description: 'Documentação da API',
          version: '1.0.0',
        },
      },
      apis: ['./routes/*.js', './models/*.js'], // Arquivos que contêm as definições do Swagger
    };
    const swaggerSpec = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }, 1000); // Atraso de 1 segundo
});
