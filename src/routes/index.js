const express = require('express');
const dataRouter = require('./dataRoutes');

const router = express.Router();

router.use('/data', dataRouter);

module.exports = router;
