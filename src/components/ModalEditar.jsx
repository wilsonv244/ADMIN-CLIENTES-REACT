import React from 'react'
import { useState,useEffect } from 'react'
import Formulario from './Formulario'
import Spinner from './Spinner'

const ModalEditar = ({idCliente,setModalEditar,setDatos,datos,setNombreFrm,nombreFrm,nombreCliente}) => {
   const [editarCliente, setEditarCliente] = useState([])
   const [cargando,setCargando] = useState(true)

   useEffect(() => {
      try {
         //TRAER LOS DATOS DEL CLIENTE
         setCargando(true)
         const getDatos = async()=>{
            const url =`${import.meta.env.VITE_API_URL}/${idCliente}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
            setEditarCliente(resultado)
            setNombreFrm("Actualizar informacion")
            setCargando(false)
         }
         getDatos()
      } catch (error) {
         console.log(error)
      }
   }, [])
  return (
     <div>
      <div id="defaultModal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-1 z-50 w-full md:inset-0 h-modal md:h-full">
         <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ml-8 modalEditar">
               <div className="relative bg-white rounded-lg shadow dark:bg-blue-100 ml-10">
                  {/* <!-- Modal header --> */}
                  <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                     <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-blue-800">
                           Editar Cliente: {nombreCliente}
                     </h3>
                     <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={()=>{setModalEditar(false)}}>
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                     </button>
                  </div>

                  <div className="p-6 space-y-6">
                    {cargando?
                    <Spinner/>
                     :
                    <Formulario
                     setNombreFrm={setNombreFrm}
                     nombreFrm={nombreFrm}
                     setModalEditar={setModalEditar}
                     editarCliente={editarCliente}
                     setDatos={setDatos}
                     datos={datos}
                    />
                    
                    }
                  </div>
                  {/* <!-- Modal footer --> */}
                 
               </div>
         </div>
      </div>
     </div>
  )
}

export default ModalEditar