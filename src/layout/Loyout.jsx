import React from 'react'
import {Outlet,Link,useLocation} from 'react-router-dom'
const Layout = () => {
  const urlActual = useLocation().pathname;
  console.log(urlActual)
  return (
    <>
      <div className='md:flex md:min-h-screen'>
        <div className='md:w-1/4 bg-blue-700 px-5 py-10'>
          <p className='text-white font-black text-4xl text-center mb-5'>Hola mundo</p>
          <nav className='flex flex-col'>
            <Link to="/clientes" className={`${urlActual=='/clientes' ?'font-black' : 'text-white'} text-white text-xl hover:text-blue-200 mb-2`}>Clientes</Link>
            <Link to="/clientes/nuevo" className={`${urlActual=='/clientes/nuevo' ? 'font-black' : 'text-white'}  text-white text-xl hover:text-blue-200 mb-2`}>Nuevo Cliente</Link>
          </nav>
        </div>
        <div className='md:w-3/4'>
          <Outlet/> 
        </div>
      </div>
    </>
  )
}

export default Layout