document.addEventListener('DOMContentLoaded',function(){
   prueba();
})
function prueba(){
   const tabla = document.querySelector("#tablaClientes");
   tabla.addEventListener("click",function(){
      console.log("probando js");
   })
}
/*
<thead className="bg-blue-500 text-white">
           <tr>
             <th>Nombre</th>
             <th>Empresa</th>
             <th>Email</th>
             <th>Telefono</th>
             <th>Notas</th>
           </tr>
         </thead>
         <tbody className="text-center border">
           {
           datos.map(elementos => {
             return(
              <tr className="border">
                <td>{elementos.nombre}</td>
                <td>{elementos.empresa}</td>
                <td>{elementos.email}</td>
                <td>{elementos.telefono}</td>
                <td>{elementos.notas}</td>
              </tr>  

             )
           })

           }
         </tbody>*/