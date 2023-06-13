import { useState } from "react";

function FuncComponent(){

    const [ value, setValue ] = useState(0);

    return <div>
             Componente Funcional

            <p>
                <button onClick={ () => setValue ( value - 1 ) }>-</button>
               {value}
                <button onClick={ () => setValue ( value + 1 ) }>+</button>
            </p>    
           </div>
}

export default FuncComponent;

/* Los componentes se pueden dividir en 2 tipos
Los tipos clase, que dependeran de estar llamando una y otra vez a una clase para estar realizando determinada
accion, esto complica mucho el control de dicho codigo, pues es facil perder exactamente donde esta el valor 
errado.

El otro tipo son los funcion, que trabajan bajo la premisa de declarar una especie de funciones matematicas, con 
las que solo con emplear las variables de dicha funcion podemos ir modificando, sin tanto codigo, permitiendo
un mejor manejo en nuestro codigo.


*/