import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

let md = {
  age: 23,
  gender: "Male",
  Occupation: "Student"
}

let arr =[1,2,3,4]
function App() {
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
      Hello world!
    </h1>
    <Card username = "Anurag" />
    <Card username = "Anu"/>
    <Card username = "rag"/>
  </>

  )
}

export default App
