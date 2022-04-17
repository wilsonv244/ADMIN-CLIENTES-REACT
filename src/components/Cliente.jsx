import React from 'react'
import { useState } from 'react'
import ModalEditar from './ModalEditar'
import { useNavigate } from 'react-router-dom'

const Cliente = ({clienteDatos,setDatos,datos,eliminar,setNombreFrm,nombreFrm}) => {
   const navegar = useNavigate();
   const [modal,setModalEditar] = useState(false)
  return (
      <tr className='mb-5'>
         <td className='border-2'>{clienteDatos.nombre}</td>
         <td className='border-2'>
            <p className='text-left'><span className='font-bold'>TEL: </span> {clienteDatos.telefono}</p>
            <p className='text-left mb-3'><span className='font-bold'>EMAIL:</span> {clienteDatos.email}</p>
         </td>
         <td className='border-2'>{clienteDatos.empresa}</td>
         <td className='border-2'>
            <button className='bg-yellow-600 mt-4 p-1 block w-full text-white font-bold mb-2 cursor-pointer' onClick={()=>navegar(`${clienteDatos.id}`)}>Ver</button>
            <button className='bg-green-400  p-1 block w-full text-white font-bold mb-2 cursor-pointer' onClick={()=>setModalEditar(true)}>Editar</button>
            <button className='bg-red-400 mb-5  p-1 block w-full text-white font-bold cursor-pointer'onClick={()=>eliminar(clienteDatos.id,clienteDatos.nombre)} >Eliminar</button>
         </td>
         {modal?
         <ModalEditar
            setNombreFrm={setNombreFrm}
            nombreFrm={nombreFrm}
            nombreCliente = {clienteDatos.nombre}
            idCliente ={clienteDatos.id}
            modal={modal}
            datos={datos}
            setDatos={setDatos}
            setModalEditar={setModalEditar}
         />
            :""
         }
      </tr>
      
  )
}

export default Cliente