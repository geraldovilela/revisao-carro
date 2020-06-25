import React from 'react';

function ReviewForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="carplate">Placa do carro</label>
                <input type="text" className="form-control w-50" id="carplate" aria-describedby="carplate" />
               
            </div>
            <div className="form-group">
                <label htmlFor="car_mileage">Quilometragem do Veiculo</label>
                <input type="number" className="form-control w-50" id="car_mileage" />
            </div>
            <div className="form-group">
                <label htmlFor="review_value">Valor do Serviço</label>
                <input type="text" className="form-control w-50" id="review_value" />
            </div>
           
            <button type="submit" className="btn btn-primary text-dark rounded-pill">Salvar</button>
        </form>
    )
}

export default ReviewForm;