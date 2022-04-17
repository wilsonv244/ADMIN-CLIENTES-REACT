import React from 'react'
import { useState } from 'react'
import {Formik ,Form, Field,ErrorMessage} from 'formik'
import *as Yup from 'yup'
import ErrorFrm from './ErrorFrm'
import {useNavigate} from 'react-router-dom'

const Formulario = ({editarCliente,setModalEditar,nombreFrm}) => {
   const navigate = useNavigate()
   // const modificarInput=(e)=>{
   //    const nombre = document.querySelector("#name");
   //    nombre.classList.add("border-blue-500")
   // }
   // const validar=(e)=>{
   //    console.log(e)
   //    const {nombre, notas, email,empresa,telefono} = e
   //    if (nombre=="" || notas=="" ||email==""||empresa=="") {
   //       console.log("Llene todos los campos")
   //    }
   // }
   const validarFormulario = Yup.object().shape({
      nombre: Yup.string()
         .required("Ingrese un nombre")
         .min(4,"Es muy corto el Nombre")
         .max(15,"Nombre muy largo"),
      empresa: Yup.string()
         .required("Ingrese una Empresa")
         .min(4,"Es muy corto el Nombre de la Empresa")
         .max(15,"Nombre muy largo de la Empresa"),
      email: Yup.string()
         .email("Email Invalido")
         .required("Ingrese un Email"),
      telefono:Yup.string()
         .required("Ingrese un Telefono")
         .min(9,"Ingrese un numero correcto")
         .max(9,"Ingrese un numero correcto"),
      notas:Yup.string()
         .required("Ingrese una Nota")
         .min(5,"Ingrese una nota mas larga")      

   })
   const enviarValores = async(values)=>{
      console.log(values)
      let respuesta;
      if(editarCliente.id){
         try {
            //editando el registro
            const url = `${import.meta.env.VITE_API_URL}/${editarCliente.id}`
            respuesta = await fetch(url,{
               method:'PUT',
               body: JSON.stringify(values),
               headers:{
                  'Content-Type':'application/json'
               }
   
            })

            setModalEditar(false)
            navigate('/nuevo')
            // location.reload()
            
            
            
         } catch (error) {
            console.log(error)
         }
      }else{
         //crear un nuevo registro
         try {
            const url = import.meta.env.VITE_API_URL
            respuesta = await fetch(url,{
               method:'POST',
               body: JSON.stringify(values),
               headers:{
                  'Content-Type':'application/json'
               }
   
            })
            
         } catch (error) {
            console.log(error)
         }
      }
      console.log(respuesta)
      const resultado = await respuesta.json()
      console.log(resultado)
   }
  return (
    <div className='ml-5 mt-3'>
      <p>Llena todos los campos para registrar un cliente</p>
      <div className='m-auto max-w-3xl mt-7 bg-blue-50 p-7 rounded-xl shadow-lg'>

         <Formik
            initialValues={{
               nombre:editarCliente.nombre??"",
               empresa:editarCliente.empresa??"",
               email:editarCliente.email??"",
               telefono:editarCliente.telefono??"",
               notas:editarCliente.notas??""
            }}
            validationSchema={validarFormulario}
            onSubmit={ async(values,{resetForm})=>{
               await enviarValores(values)
               resetForm()
               navigate('/clientes')
            }}
            enableReinitialize={true}

         >
            {(data)=>{
               console.log(data.errors)
            return(

            <Form>
               <div className='mb-4'>
                  <label htmlFor='nombre' className='block mb-2 font-bold'>Nombre:</label>
                  <Field
                     id="nombre"
                     placeholder="Nombre del Cliente"
                     type="text"
                     className="w-full p-2 rounded-xl border "
                     name="nombre"
                  />
                  {/* <ErrorMessage name="nombre" className='bg-red-500'/> */}
                  {data.errors.nombre?
                        <ErrorFrm
                           mensaje={data.errors.nombre}
                        />
                     :
                     ""
                     // modificarInput(data.errors.nombre)
                     
                  }
               </div>
               <div className='mb-4'>
                  <label htmlFor='empresa' id='empresa' className='block mb-2 font-bold'>empresa:</label>
                  <Field
                     placeholder="empresa del Cliente"
                     type="text"
                     className="w-full p-2 rounded-xl"
                     id="empresa"
                     name="empresa"
                  />
                  {data.errors.empresa ?
                        <ErrorFrm
                           mensaje={data.errors.empresa}
                        />
                     :
                     ""
                     // modificarInput(data.errors.nombre)
                  }
               </div>
               <div className='mb-4'>
                  <label htmlFor='email' className='block mb-2 font-bold'>Email:</label>
                  <Field
                     placeholder="email del Cliente"
                     type="text"
                     className="w-full p-2 rounded-xl"
                     id="email"
                     name="email"
                     />
                     {data.errors.email ?
                           <ErrorFrm
                              mensaje={data.errors.email}
                           />
                        :
                        ""
                        // modificarInput(data.errors.nombre)
                     }
               </div>
               <div className='mb-4'>
                  <label htmlFor='telefono' className='block mb-2 font-bold'>Telefono:</label>
                  <Field
                     placeholder="telefono del Cliente"
                     type="number"
                     className="w-full p-2 rounded-xl"
                     id="telefono"
                     name="telefono"
                     />
               </div>
                     {data.errors.telefono ?
                           <ErrorFrm
                              mensaje={data.errors.telefono}
                           />
                        :
                        ""
                        // modificarInput(data.errors.nombre)
                     }
               <div className='mb-4'>
                  <label htmlFor='notas' className='block mb-2 font-bold'>notas:</label>
                  <Field
                     id='notas'
                     name="notas"
                     as="textarea"
                     placeholder="notas del Cliente"
                     type="text"
                     className="w-full p-2 rounded-xl h-32"
                     />
                     {data.errors.notas ?
                           <ErrorFrm
                              mensaje={data.errors.notas}
                           />
                        :
                        ""
                        // modificarInput(data.errors.nombre)
                     }
               </div>
               <input type="submit"
                  value={nombreFrm}
                  className='w-full p-2 bg-red-300 rounded-xl font-black cursor-pointer'
                  
               />
            </Form>
            )}}
         </Formik>
      </div>
    </div>
  )
}
Formulario.defaultProps={
   editarCliente:{}
}

export default Formulario