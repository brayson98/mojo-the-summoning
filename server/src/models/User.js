const { DataTypes } = require("sequelize");
const db = require("../db/config");

const User = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true  // Auto-increment for convenience
    },
    username: DataTypes.STRING
});

module.exports = User;
