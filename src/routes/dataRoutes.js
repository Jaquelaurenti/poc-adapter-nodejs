const express = require('express');
const router = express.Router();
const fetchDataController = require('../controllers/fetchDataController');

/**
 * @swagger
 * tags:
 *   name: Data
 *   description: Operações relacionadas aos dados
 */

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Retorna dados da API.
 *     description: Retorna os dados da API.
 *     tags: [Data]
 *     responses:
 *       200:
 *         description: Dados retornados com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Data'
 */
router.get('/', fetchDataController.fetchData);

module.exports = router;
