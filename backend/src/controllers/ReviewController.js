const Review = require('../models/Review');
const Car = require('../models/Car');
const Client = require('../models/Client');
const { index } = require('./CarController');

module.exports = {
    async index(request, response){
        const {client_id, car_plate} = request.params;
        var review;
        if(client_id==0 && car_plate==0){
            review = await Review.schema('geraldovilela').findAll()
            return response.json(review);
        }
        review = await Review.schema('geraldovilela').findAll({where:{client_id, car_plate}})
        
        return response.json(review)
    },
    async store(request, response) {
        const { client_id, car_plate } = request.params;
        const { review_number, car_mileage, review_value } = request.body;

        const client = await Client
            .schema('geraldovilela')
            .findByPk(client_id);

        if (!client) {
            return response.status(400)
                .json({ error: "Invalid Client " })
        }

        const review = await Review
            .schema('geraldovilela')
            .create({
                    client_id,
                    car_plate,
                    review_number,
                    car_mileage,
                    review_value
                })
        

        response.json(review)
    },
    async delete(request, response){
        const { client_id, car_plate, id} =request.params;

        const review = await Review.schema('geraldovilela').findOne({ where: { id, client_id, car_plate } })

        if(review){
            review.destroy()
            return response.status(204).send();
        }

        response.json({erro:"teste"})
    }
}