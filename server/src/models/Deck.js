const { DataTypes } = require("sequelize");
const db = require("../db/config");

const Deck = db.define("Deck", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
});

module.exports = Deck;
