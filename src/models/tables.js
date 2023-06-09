"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tables.hasMany(models.orders, { foreignKey: "table_id" });
    }
  }
  tables.init(
    {
      capacity: DataTypes.SMALLINT,
      available: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "tables",
    }
  );
  return tables;
};
