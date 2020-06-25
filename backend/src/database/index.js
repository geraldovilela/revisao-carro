const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const Client = require('../models/Client');
const Car = require('../models/Car');
const Review = require('../models/Review');

const connection = new Sequelize(dbConfig);

Client.init(connection);
Car.init(connection);
Car.associate(connection.models);
Review.init(connection);
Review.associate(connection.models);

module.exports = connection;