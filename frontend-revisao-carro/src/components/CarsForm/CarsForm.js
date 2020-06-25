import React from 'react';

function CarsForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="carplate">Placa</label>
                <input type="text" className="form-control w-50" id="carplate" aria-describedby="carplate" />
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Cliente</label>
                <input type="text" className="form-control w-50" id="client" />
            </div>
            <div className="form-group">
                <label htmlFor="birthday">Pintura</label>
                <input type="text" className="form-control w-50" id="carcolor" />
            </div>
            <div className="form-group">
                <label htmlFor="Telefone">Fabricante</label>
                <input type="text" className="form-control w-50" id="carmanufacturer"/>
            </div>
            <div className="form-group">
                <label htmlFor="Telefone">Modelo</label>
                <input type="text" className="form-control w-50" id="carmodel"/>
            </div>
           
            <button type="submit" className="btn btn-primary text-dark rounded-pill">Salvar</button>
        </form>
    )
}

export default CarsForm;