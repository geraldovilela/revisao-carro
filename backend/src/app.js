const express = require('express');
const cors = require('cors');
const {uuid, isUuid} = require('uuidv4');

const ClientController = require('./controllers/ClientController');
const CarController = require('./controllers/CarController');
const ReviewController = require('./controllers/ReviewController');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];
/**rota para listagem de clientes */
app.get('/clients/:id', ClientController.index)
//*rota de criação de clientes */
app.post('/clients', ClientController.store)
/**rota para exclusão de clientes */
app.delete('/clients/:id', ClientController.delete)
/**rota para updata de dados de clientes */
app.put('/clients/:id',(request, response)=>{
    const { id } = request.params;
    const {name, gender, email, birthday, licenseID} = request.body;

    const newUSer = {
        id,
        name,
        gender,
        email,
        birthday,
        licenseID
    }
    const userIndex = users.findIndex(user=> user.id==id);
    if(!isUuid(id)){
        response.status(401).json("invalid id")
    }
    else {
        users[userIndex]=newUSer;
    }

    response.json(newUSer);
})

//**rota para listagem de carros */
app.get('/clients/:client_id/cars/:id', CarController.index);
//*rota de criação de cadastro para os carros */
app.post('/clients/:client_id/cars', CarController.store);
//**rota para exclusão de carros */
app.delete('/clients/:client_id/cars/:id', CarController.delete);

//*rota de criação e cadastro para as revisões */
app.get('/clients/:client_id/:car_plate/reviews',ReviewController.index)
//*rota de criação e cadastro para as revisões */
app.post('/clients/:client_id/:car_plate/reviews',ReviewController.store)
//*rota de exclusão para as revisões*/
app.delete('/clients/:client_id/:car_plate/reviews/:id',ReviewController.delete)


module.exports = app;

