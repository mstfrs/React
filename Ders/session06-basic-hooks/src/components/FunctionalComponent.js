import React from 'react'
import { useState, useEffect } from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(4)
  const [user, setUser] = useState({ name: 'Felix', age: 25, email: 'felix@gmail.com' })

  useEffect(() => {
    console.log('UserEffect')
    let timeOut = setTimeout(() => {
      alert('Hello')
    }, 3000)
  }, [count])

  const increase = () => setCount(count + 1)
  const increaseAge = () => setAge(age + 1)
  const updateUser = () => setUser({ ...user, name: 'John', age: 35 })

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={increase}> Increase</button>
      <p>Age : {age}</p>
      <button onClick={increaseAge}> Increase Age</button>
      <p>User Name : {user.name}</p>
      <p>User Age: {user.age}</p>
      <p>User Email: {user.email}</p>
      <button onClick={updateUser}> Update User</button>
    </div>
  )
}

export default FunctionalComponent
