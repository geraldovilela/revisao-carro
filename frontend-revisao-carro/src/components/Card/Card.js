import React from 'react';
import {Link} from 'react-router-dom';

function Card() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Clientes</h5>
        <Link to={`/clients`} className="btn btn-primary">Ir para Clientes</Link>
      </div>

      <div className="card-body">
        <h5 className="card-title">Carros</h5>
        <Link to={`/cars`} className="btn btn-primary">Ir para Carros</Link>
      </div>

      <div className="card-body">
        <h5 className="card-title">Revisões</h5>
        <Link to={`/reviews`} className="btn btn-primary">Ir para Revisões</Link>
      </div>

    </div>
  )
}
export default Card;