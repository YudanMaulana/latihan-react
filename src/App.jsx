// import { useState } from 'react'
import './index.css'
// import Server from './server'
import { user } from './DataUser'


const listItems = user.map(nav => 
  <ul key={nav}>
    <b>{nav.id}</b>
    <p>{nav.name}</p>
    <p>{nav.profesi}</p>
  </ul>
)
function App() {
  return <ul className='p-2 bg-gray-200'>{listItems}</ul>
}

export default App
