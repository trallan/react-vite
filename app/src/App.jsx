import { useState } from 'react'
import './App.css'
import Greeting from './components/Test'
import Fruits from './components/Fruits'
import UserList from './components/UserList'
import TestButton from './components/TestButton'
import TestState from './components/TestState'


function App() {

  return (
    <>
     <Greeting name='John'/>
     <Fruits />
     <UserList />
     <TestButton buttonText='Click Me!'/>
     <TestState />
    </>
  )
}

export default App
