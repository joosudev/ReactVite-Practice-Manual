import  { useRef, useState } from 'react'

/** Variables en React  */

const Avariables = () => {
   // 1. Variables Locales (Scope limitado al redenrizado actual)
   const varLocal = "Variable Local";
   
   //2. Variables de Estado(State) (Para variables que cambian y cuasan re-renderizado)
     const [stateVariable, setStateVariable] = useState("Variable de estado");
   
     //3. Referencias (Refs) (Para almacenar valores que no causan re-renderizado)
     const refVar = useRef('Esta es una referencia');

     //4. Constantes y Variables Globales
     const constantVar = 'Esta es una Constante'
     let globalVar = 'Esta es una variable global'

     // Funcion para desmotrar la actualización de estado
     const updateStatevar = () =>{
        setStateVariable('La variable de Estado ha Cambiado')
     }

     
    // Función para demostrar el uso de refs
    const updateRefVar = () =>{
        refVar.current = 'El valor de la referencia ha cambiado';
        console.log(refVar.current);
    }

    return (
    <div>
      <div className='contenedor-variables'>
         <h1>Declaración de Variables en ReactVite</h1>
         <p>{varLocal}</p>
         <p>{stateVariable}</p>
         <button onClick={updateStatevar}>Actualizar la Variable</button>
         <p>{refVar.current}</p>
         <button onClick={updateRefVar}>Actualizar Referencia</button>
         <p>{constantVar}</p>
         <p>{globalVar}</p>
      </div>
    </div>
  )
}

export default Avariables