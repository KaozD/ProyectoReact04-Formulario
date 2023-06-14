import { useState } from "react";

import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




function FormSignUp ({handleSubmit}){

    const [ name, setName ] = useState( '' );
    const [ lastname, setLastName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ prom, setProm ] = useState( true );
    const [ nov, setNov ] = useState( false );
    
    

    /* useEffect
    Es un hook que nos mostrara el cambio en tiempo real de algun elemento que nosostros le
    especifiquemos.
    */

    return (
    <form onSubmit={ ( e ) =>{
        e.preventDefault()
        handleSubmit( {name, lastname, email, prom, nov} )
    } } >
        <TextField id="name" label="Nombre"
             variant="outlined" fullWidth margin="normal" onChange={ ( e ) =>                
                setName( e.target.value )
            } value={ name } />
        <TextField id="lastName" label="Apellido" 
            variant="outlined" fullWidth margin="normal" onChange={ ( e ) =>                 
                setLastName( e.target.value )
            } value={ lastname }/>
        <TextField id="email" label="E-mail" 
            variant="outlined" fullWidth margin="normal" onChange={ ( e ) =>                 
                setEmail( e.target.value )
            } value={ email } />

        <FormGroup >

            <FormControlLabel control={<Switch checked={ prom } 
                onChange={ ( e ) => setProm( e.target.checked ) } />}
                label="Promociones" />
            <FormControlLabel control={<Switch checked={ nov } 
                onChange={ ( e ) => setNov( e.target.checked ) } />} 
                label="Novedades" />

        </FormGroup>
            
        <Button variant="contained" color="success" type="submit">
            Registrarse
        </Button>

    </form>
    )
}


export default FormSignUp;

/*Elementos de Material UI y sus propiedades
Cada elemento que nosotros deseemos instalar a nuestro proyecto, podremos en primera elegirlo desde la 
pagina de Material UI, mui.com, en donde podremos ver el elemento y algunas variantes, asi como su codigo para 
implementarlo.

En dicha implementacion, debemos tener en cuenta que habra que poner su respectiva importacion, para que funcione
el elemento deseado

Y despues llamarlo como si fuera un componente, en este le podremos dar determinadas propiedades, que tambien podremos
en la pagina de mui, al agregarle las caracteristicas llegaremos a un metoda sencillo para su codificacion.
*/

/* Para saber y conocer el comportamiento de los hooks se recomienda ver la documentacion de React
Reglas de los Hooks */

