import React from 'react';

function ClientForm() {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" className="form-control w-50" id="name" aria-describedby="name" />
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control w-50" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="birthday">Data Nascimento</label>
                <input type="Data" className="form-control w-50" id="birthday" />
            </div>
            <div className="form-group">
                <label htmlFor="Telefone">Telefone</label>
                <input type="text" className="form-control w-50 phonemask" data-inputmask="'mask': '(99) 99999-9999'" data-mask im-insert="true" id="phonenumber"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="genderM" />
                <label className="form-check-label" htmlFor="exampleCheck1">Masculino</label>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="genderF" />
                <label className="form-check-label" htmlFor="exampleCheck1">Feminino</label>
            </div>
            <button type="submit" className="btn btn-primary text-dark rounded-pill">Salvar</button>
        </form>
    )
}

export default ClientForm;