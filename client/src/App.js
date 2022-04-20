import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import UserList from './UserList';

function App() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    axios.get('https://node-api4-project-2.herokuapp.com/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);


  return (
    <div className="App">
      <h1>List of Users</h1>
      {users.map(user => {
        return <UserList user={user} key={user.id}/>
      })}
    </div>
  );
}

export default App;
