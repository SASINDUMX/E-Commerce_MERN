import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />} >
        </Route>
        <Route > { /* Admin Layout */} </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App 