// require sequelize to create ids
const Sequelize = require("sequelize");

// Creating our Application model
module.exports = function(sequelize, DataTypes) {
  const Application = sequelize.define("Application", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM({
        values: ["pending", "applied"]
      }),
      defaultValue: "pending",
      allowNull: false
    }
  });

  Application.associate = function(models) {
    Application.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Application;
};