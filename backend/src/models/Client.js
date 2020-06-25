const { Model, DataTypes } = require('sequelize');

class Client extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            gender: DataTypes.STRING,
            email: DataTypes.STRING,
            birthday: DataTypes.DATE, 
        },
        {
            sequelize
        })
    }
}

module.exports = Client;