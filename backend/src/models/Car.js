const { Model, DataTypes } = require('sequelize');

class Car extends Model {
    static init(sequelize){
        super.init({
            carplate: DataTypes.STRING,
            carcolor: DataTypes.STRING,
            carmanufacturer: DataTypes.STRING,
            carmodel: DataTypes.STRING,
            client_id: DataTypes.INTEGER,
        },
        {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Client, {foreignKey: 'id', as:'clientid'})
    }
}

module.exports = Car;