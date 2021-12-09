import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  const [newUsers, setNewUsers] = useState([])
  const data = [
    { id: 11, name: 'Jenny Doe' },
    { id: 12, name: 'Jason Response' },
    { id: 13, name: 'Miles Tone' }
  ]

  useEffect(() => {
    // axios
    //   .get('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => setUsers(response.data))
    //   .catch((err) => console.log(err))

    // axios('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => setUsers(response.data))
    //   .catch((err) => console.log(err))

    axios({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET'
    }).then((response) => setUsers(response.data))
  }, [])

  const postNewUsers = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', { data }).then((res) => setNewUsers(res.data.data))
  }
  console.log(users)
  return (
    <div className="users">
      <h2>Users</h2>
      {/* <button onClick={getUsers}>Get Users</button> */}
      <button onClick={postNewUsers}>Post Users</button>
      <div className="users-cards">
        {users.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
        {newUsers.map((user) => (
          <div className="useritem" key={user.id}>
            <img src={`https://avatars.dicebear.com/v2/avataaars/${user.id}.svg`} alt="" />
            {user.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
