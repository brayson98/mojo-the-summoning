const { DataTypes } = require("sequelize");
const db = require("../db/config");

const Card = db.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
});

module.exports = Card;
