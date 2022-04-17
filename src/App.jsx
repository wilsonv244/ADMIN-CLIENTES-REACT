import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './paginas/Inicio'
import NuevoCliente from './paginas/NuevoCliente'
import Layout from './layout/Loyout'
import VerClientes from './components/VerClientes'
import ModalEditar from './components/ModalEditar'
function App() {

  const [nombreFrm, setNombreFrm] = useState("Registrar Nuevo Cliente")
  console.log(import.meta.env.VITE_API_URL)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout/>}>
          <Route index element={<Inicio
            setNombreFrm={setNombreFrm}
            nombreFrm={nombreFrm}
          />}/>
          <Route path='nuevo' element={<NuevoCliente/>}/>
          <Route path=':id' element={<VerClientes/>}/>
          <Route path='modla' element={<ModalEditar/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
