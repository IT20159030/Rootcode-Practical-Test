import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ViewExpense, ViewAllExpenses, UpdateExpense, CreateExpense, Reports } from './pages'
import { NavBar } from './components'
import { ContextProvider } from './context/ContextProvider'
import './App.css'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all-expenses' element={<ViewAllExpenses />} />
            <Route path='/expenses/:id' element={<ViewExpense />} />
            <Route path='/expenses/update/:id' element={<UpdateExpense />} />
            <Route path='/add-expense' element={<CreateExpense />} />
            <Route path='/reports' element={<Reports />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
