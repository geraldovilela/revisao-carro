const Car = require('../models/Car');
const Client = require('../models/Client');


module.exports = {
    async index(request, response){
        const {id, client_id} = request.params
        var cars;
        if(id==0 && client_id==0){
             cars = await Car.schema('geraldovilela').findAll( )
            response.json(cars);
        }
        cars = await Car.schema('geraldovilela').findAll({ 
            where:{id, client_id}
        })
        
        response.json(cars);

    },

    async store(request, response) {
        const { client_id } = request.params;
        const { carplate, carcolor, carmanufacturer, carmodel } = request.body;

        const client = await Client
            .schema('geraldovilela')
            .findByPk(client_id);

        if (!client) {
            return response
                .status(400)
                .json({ error: "Client not Found" })
        }

        const car = await Car
            .schema('geraldovilela')
            .create({
                client_id,
                carplate,
                carcolor,
                carmanufacturer,
                carmodel
            });

        return response.json(car);
    },

    async delete(request, response){
        const {id, client_id} = request.params
        const car = await Car
            .schema('geraldovilela')
            .findOne({ where: { id, client_id } });

        if(car) {
        car.destroy();
            return response.status(204).send()
        }
        return response.status(400).json('Invalid parameters');
    }
}