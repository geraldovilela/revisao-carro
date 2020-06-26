import React, {useState} from 'react';

import api from '../../services/api';

function ClientForm() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday,setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    
    function handleCreateClient(e){
        e.preventDefault();     
    }


    return (
        <form onSubmit={handleCreateClient}>
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" 
                className="form-control w-50" 
                id="name" aria-describedby="name"
                value={name}
                onChange={e=> setName(e.target.value)}/>
               
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" 
                className="form-control w-50" 
                id="email"
                value={email}
                onChange= {e => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="birthday">Data Nascimento</label>
                <input type="Data" 
                className="form-control w-50" 
                id="birthday"
                value={birthday}
                onChange={e => setBirthday(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="Telefone">Telefone</label>
                <input type="text" 
                className="form-control w-50 phonemask" 
                data-inputmask="'mask': '(99) 99999-9999'" 
                data-mask im-insert="true" id="phonenumber"
                value={phone}
                onChange={e=> setPhone(e.target.value)}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" 
                className="form-check-input" 
                id="genderM"
                value={gender}
                onChange={e => setGender(e.target.value)} />
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