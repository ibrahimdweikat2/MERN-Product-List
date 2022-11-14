import React from 'react'
import {BrowserRouter ,Route,Routes,Navigate} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
  <div className='container-lg'>
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/home/search' element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter >
  </div>
  )
}

export default App