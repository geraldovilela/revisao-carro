const { Model, DataTypes } = require('sequelize');

class Review extends Model {
    static init(sequelize){
        super.init({
            car_plate: DataTypes.STRING,
            client_id: DataTypes.INTEGER,
            review_number: DataTypes.INTEGER,
            car_mileage: DataTypes.INTEGER,
            review_value: DataTypes.DECIMAL(11,2),
            
        },
        {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Client, {foreignKey: 'id', as:'clientid'})
    }
}

module.exports = Review;