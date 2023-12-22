import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


  export default function App() {
    return (
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    )
  }