import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>

      <div className="app">
        <BrowserRouter>
        <Header></Header>
        <Routes>
          */RUTAS PUBLICAS */ 
          <Route path='/home' element= {<Home></Home>}>
            </Route> 
            <Route path='/products' element= {<Products></Products>}>
            </Route> 
            <Route path='/products/:id' element= {<Product></Product>}>
            </Route> 
            <Route path='/auth/login' element= {<Loguin></Loguin>}>
            </Route> 
            <Route path='/auth/signup' element= {<Signup></Signup>}>
            </Route> 
            */RUTAS PRIVADAS /*
            <Route path='/profile' element= {<Profile></Profile>}>
            </Route> 
        </Routes>
        </BrowserRouter>
       
      </div>
    </>
  )
}

export default App
