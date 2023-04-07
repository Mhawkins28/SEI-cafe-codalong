import { useState } from 'react'
import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import AuthPage from '../AuthPage/AuthPage'
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {

  const [user, setUser] = useState({})

  return (
    <main className="App">

      {user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/" element={<OrderHistoryPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  )
}