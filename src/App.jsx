import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Success from './pages/Success';
import Home from './pages/Home';
import Error from './pages/Error';
import Protected from './components/Protected';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/success' element={<Protected element={<Success/>}/>}/>
    <Route path='/*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App