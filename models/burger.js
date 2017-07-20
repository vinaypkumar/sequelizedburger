var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burgers", {
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
  }

}, {
  timestamps: false
});

Burger.sync();

module.exports = Burger;
