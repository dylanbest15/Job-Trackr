// require sequelize to create ids
const Sequelize = require("sequelize");

// Creating our Benchmark model
module.exports = function(sequelize, DataTypes) {
  const UserBenchmark = sequelize.define("UserBenchmark", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  });

  UserBenchmark.associate = function(models) {
    UserBenchmark.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
    UserBenchmark.belongsTo(models.Benchmark, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return UserBenchmark;
};