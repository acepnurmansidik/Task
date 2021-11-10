const { DataTypes } = require("sequelize");
const db = require("../../config/db");

const Provinsi = db.define(
  "provinsi_tb",
  {
    nama: {
      type: DataTypes.STRING,
    },
    diresmikan: {
      type: DataTypes.DATEONLY,
    },
    photo: {
      type: DataTypes.STRING,
    },
    pulau: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Provinsi;
