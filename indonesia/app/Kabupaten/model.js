const Sequelize = require("sequelize");
const db = require("../../config/db");

const Kabupaten = db.define(
  "kabupaten_tb",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nama: {
      type: Sequelize.STRING,
    },
    diresmikan: {
      type: Sequelize.DATE,
    },
    photo: {
      type: Sequelize.STRING,
    },
    Provinsi_Id: {
      type: Sequelize.NUMBER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Kabupaten;
