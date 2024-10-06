import  {  useState } from 'react'

const Ejercicio1 = () => {
      // Declaracion de Variable
       let nombreUsuario = "Vladimir Willians"; 
       // Declarando una Constante
       const cedulaID = 12345
       // Variables de Estado(State) en React
       const [stateVariable, setStateVariable] = useState("Variable en estado");
       // Función para cambiar el estado de la Variable
       const updateStatevar = ()=>{
         setStateVariable('La Variable de Estado ha cambiado')
       }
    return (
    <div>
      <hr></hr>
       <h1>Ejercicio1 Variables</h1>
         <h3>{nombreUsuario}</h3>
         <p>{cedulaID}</p>
         <p>{stateVariable}</p>
         <button onClick={updateStatevar}>Actualizar Referencia</button>
    </div>
  )
}






export default Ejercicio1