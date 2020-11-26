// require sequelize to create ids
const Sequelize = require("sequelize");

// Creating our Benchmark model
module.exports = function(sequelize, DataTypes) {
  const Benchmark = sequelize.define("Benchmark", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  });

  return Benchmark;
};