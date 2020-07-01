import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';

function ContentTableClient(props) {
  const [clients, setClients] = useState([]);


  const history = useHistory();
  useEffect(() => {
    api.get("/clients/0")
    .then(response => {
      setClients(response.data)
      
    })
    
  }, [clients])
  

  function handleUpdate(event){
    localStorage.setItem("clientId", event.id);
    history.push(`/clientformupdate/${event.id}`)
  }

  async function handleDelete(event){
    localStorage.setItem("clientId", event.id)
    const id = event.id
    const response = await api.delete(`/clients/${id}`)
    
    alert(`o client id ${id} foi excluido.${response.data}`)
  }
 
  return (
    <>
      <Link className="btn btn-primary" to="/ClientForm" role="button">Cadastrar novo Client</Link>
      <table className="table">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Genero</th>
            <th scope="col">Email</th>
            <th scope="col">Data Nascimento</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
            <th scope="row">{client.id}</th>
            <td>{client.name}</td>
            <td>{client.gender}</td>
            <td>{client.email}</td>
            <td>{client.birthday}</td>
            <td><button className="btn btn-primary m-1 w-50" 
            type="submit" 
            value={client} onClick={e => handleUpdate(client)}>Update</button>
           
            <button className="btn btn-primary m-1 w-50" 
            type="submit" 
            value={client} onClick={e => handleDelete(client)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ContentTableClient;