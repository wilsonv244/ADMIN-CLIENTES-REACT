import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from './Spinner'
const VerClientes = () => {
   const [datosId,setDatosId] = useState([])
   const [cargando, setCargando ]= useState(true)
   const urlId = useParams().id
   useEffect(() => {
      const getDatosId = async()=>{
         setCargando(true)
         try {
            const url = `${import.meta.env.VITE_API_URL}/${urlId}`
            const respuesta =  await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)
            setDatosId(resultado)
            setCargando(false)
            
         } catch (error) {
            console.log(error)
         }
      }
      getDatosId()
   }, [])
   const{nombre,empresa, email, telefono, notas} = datosId
   console.log(datosId)
  return (
     <>
      <div className='mt-8 ml-5'>
         {cargando? <Spinner/>:
         nombre?
         <>
               <p className='text-center md:text-left  text-4xl font-black text-blue-900 mb-5'>Ver Cliente: {nombre} </p>
               <p className='uppercase font-bold mb-8'>informacion del Cliente:</p>
               <>
               <div>
                  <p className='font-black text-2xl mb-3'>CLIENTE:<span className='font-thin ml-5'>{nombre}</span></p>
                  <p className='font-black text-2xl mb-3'>EMAIL:<span className='font-thin ml-5'>{email}</span></p>
                  <p className='font-black text-2xl mb-3'>TELEFONO:<span className='font-thin ml-5'>{telefono}</span></p>
                  <p className='font-black text-2xl mb-3'>EMPRESA:<span className='font-thin ml-5'>{empresa}</span></p>
                  <p className='font-black text-2xl mb-3'>NOTAS:<span className='font-thin ml-5'>{notas}</span></p>
               </div>
               </>
            
         </>
            :
            <p className='text-center md:text-left  text-4xl font-black text-blue-900 mb-5 mt-5'>No se encontraron los Datos </p>
            
         }
      </div>
     </>
  )
}

export default VerClientes