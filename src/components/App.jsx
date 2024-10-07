// import { useState } from 'react'
import '../index.css'
// import Server from './server'
import { user } from './DataUser'


const listItems = user.map(user => 
  <li key={user}>
    <b>{user.id}</b>
    <p>{user.name}</p>
    <p>{user.profesi}</p>
  </li>
)
function App() {
  return <ul className='p-2 bg-gray-200'>{listItems}</ul>
}

export default App
