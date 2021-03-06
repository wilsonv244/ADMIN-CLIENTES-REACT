import { useEffect,useState } from "react"
import Cliente from "../components/Cliente"
const Inicio = ({setNombreFrm,nombreFrm}) => {
  const [datos, setDatos] =useState([])
  
  useEffect(() => {
    const getDatos = async()=>{
      const url = import.meta.env.VITE_API_URL
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setDatos(resultado)
    }
    getDatos()
    
  }, [])
  const eliminar=async(ed,nombre)=>{
    const confirmar = confirm(`¿Deseas Eliminar el cliente: ${nombre}` )
    console.log(confirmar)
    console.log(ed) 
    if(confirmar){
      try {
        const url =`${import.meta.env.VITE_API_URL}/${ed}`
        const respuesta = await fetch(url,{
          method:"DELETE"
        })
        console.log(respuesta)
        const datoNuevos = datos.filter(e=>{
          return e.id!==ed
        })
        setDatos(datoNuevos)
        
      } catch (error) {
        console.log(error)
      }

    } 
    
  }
  return (
     <div className="ml-5">
      <p className='text-center md:text-left mt-8 ml-5 text-4xl font-black text-blue-900 mb-10'>Lista de Clientes</p>
      <table  className="w-full  border-b-teal-900 rounded-lg shadow-lg">
        <thead className="bg-red-500 text-white">
          <tr className="">
            <th className="p-2 border-2 " >Nombre</th>
            <th className="p-2 border-2 " >Contacto</th>
            <th className="p-2 border-2 " >Empresa</th>
            <th className="p-2 border-2 " >Acciones</th>
          </tr>
        </thead>
        <tbody className="text-center mb-2  bg-rose-50">
            {datos.map(element=>{
              return(
                <Cliente
                  setNombreFrm={setNombreFrm}
                  nombreFrm={nombreFrm}
                  setDatos={setDatos}
                  datos={datos}
                  key={element.id}
                  clienteDatos = {element}
                  eliminar={eliminar}
                />

              )
            })

            }
        </tbody>
      </table>
     </div>
  )
}

export default Inicio