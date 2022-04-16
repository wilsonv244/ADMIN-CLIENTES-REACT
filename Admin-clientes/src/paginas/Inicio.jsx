import { useEffect,useState } from "react"
import DataTable from "react-data-table-component"
const Inicio = () => {
  const estilos={
    columns:''
  }
  const editar=[
    {
      editar:"editar"
    }
  ]
  const columns=[
    {
      name:"Nombre",
      selector: row=>row.nombre
    },
    {
      name:"Empresa",
      selector: row=>row.empresa
    },
    {
      name:"email",
      selector: row=>row.email
    },
    {
      name:"telefono",
      selector: row=>row.telefono
    },
    {
      name:"notas",
      selector: row=>row.notas
    },
    
    {
      name:"Acciones",
      selector: editar=>editar.editar
    }
  ]
  const [datos,setDatos]=useState([])
  useEffect(() => {
    const getDatos =async()=>{
      try {
        const url="http://localhost:4000/clientes"
        const respuest = await fetch(url);
        const dato = await respuest.json()
        console.log(dato);
        setDatos(dato)
        
      } catch (error) {
        console.log(error)
      }

    }
    getDatos()
  }, [])
  // console.log(datos)
  return (

     <div className="ml-5">
       <p className='text-center md:text-left mt-8 mb-10 ml-5 text-4xl font-black text-blue-900'>Lista de Clientes</p>
       <DataTable
        className="bg-red-100"
        columns={columns}
        highlightOnHover
        data={datos}
        pagination
        selectableRows
        responsive
        theme="solarized"
       />
     </div>
  )
}

export default Inicio