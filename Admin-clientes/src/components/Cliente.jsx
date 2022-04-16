import React from 'react'
import { useState } from 'react'

const Cliente = ({clienteDatos}) => {
  return (
      <tr className='mb-5'>
         <td className='border-2'>{clienteDatos.nombre}</td>
         <td className='border-2'>
            <p className='text-left'><span className='font-bold'>TEL: </span> {clienteDatos.telefono}</p>
            <p className='text-left mb-3'><span className='font-bold'>EMAIL:</span> {clienteDatos.email}</p>
         </td>
         <td className='border-2'>{clienteDatos.empresa}</td>
         <td className='border-2'>
            <a className='bg-green-400 rounded-lg p-1 text-white font-bold mb-2 cursor-pointer'>Editar</a>
            <a className='bg-red-400 rounded-lg ml-3 p-1 text-white font-bold cursor-pointer'>Eliminar</a>
         </td>
      </tr>
      
  )
}

export default Cliente