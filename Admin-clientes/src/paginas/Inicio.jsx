import { useEffect,useState } from "react"
import Cliente from "../components/Cliente"
const Inicio = () => {
  const [datos, setDatos] =useState([])
  
  useEffect(() => {
    const getDatos = async()=>{
      const url = "http://localhost:4000/clientes"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setDatos(resultado)
    }
    getDatos()
    
  }, [])
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
                  key={element.id}
                  clienteDatos = {element}
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