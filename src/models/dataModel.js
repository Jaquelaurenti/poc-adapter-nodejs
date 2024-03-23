// models/dataModel.js

/**
 * @swagger
 * components:
 *   schemas:
 *     Data:
 *       type: object
 *       properties:
 *         data:
 *           type: string
 */

 class DataModel {
  constructor(data) {
    this.data = data;
  }
}

module.exports = DataModel;
