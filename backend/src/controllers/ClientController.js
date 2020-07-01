
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

    },

    async update(request, response) {
        const {id, name, gender, email, birthday } = request.body;
        console.log(request.body)
        const update = await Client
        .schema('geraldovilela').update({id,name,gender,email,birthday},{where: {id}})
        console.log(id, update)
        
        const client = await Client.schema('geraldovilela').findByPk(id);    
        return response.json(client);
    },
    async dashboard(request, response) {
        const womans = await Client.schema('geraldovilela')
                        .count({
                            attributes:['gender'],
                            where: {gender:"F"},
                            group: ["gender"]
                        })
        const man = await Client.schema('geraldovilela')
                        .count({
                            attributes:['gender'],
                            where: {gender:"M"},
                            group: ["gender"]
                        })
        const total = await Client.schema('geraldovilela')
                        .count({
                            })
        
        const data = [
            womans,
            man,
            total
        ]
        response.json(data);
    }
}

