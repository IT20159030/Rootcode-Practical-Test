import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ViewExpense, ViewAllExpenses, UpdateExpense, CreateExpense } from './pages'
import { ContextProvider } from './context/ContextProvider'
import './App.css'

function App() {

  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/expenses' element={<ViewAllExpenses />} />
            <Route path='/expenses/:id' element={<ViewExpense />} />
            <Route path='/update-expense/:id' element={<UpdateExpense />} />
            <Route path='/add-expense' element={<CreateExpense />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
