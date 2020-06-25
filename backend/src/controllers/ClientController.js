const Client = require('../models/Client');

module.exports = {
    async index(request, response){
        const {id} = request.params

        if(id!=0){
            var client = await Client.schema('geraldovilela').findAll({ 
                where:{id}
            } )
            return response.json(client);
        }
        var client = await Client.schema('geraldovilela').findAll()
        return response.json(client);

    }
    ,
    async store(request, response) {
        const { name, gender, email, birthday } = request.body;

        const client = await Client
            .schema('geraldovilela')
            .create({ name, gender, email, birthday });

        return response.json(client);
    },

    async delete(request, response) {
        const { id} = request.params;

        const client = await Client
            .schema('geraldovilela')
            .findOne({ where: { id } });

        //    await client
        client.destroy();

        return response.send();

    }
}