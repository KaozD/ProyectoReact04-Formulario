import { useState, useEffect } from "react";

import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




function FormSignUp (){

    const [ name, setName ] = useState( '' );
    useEffect( () => {
        console.log("Name Cambio: ", name)
    }, [name] )

    /* useEffect
    Es un hook que nos mostrara el cambio en tiempo real de algun elemento que nosostros le
    especifiquemos.
    */

    return (
    <form>
        <TextField id="name" label="Nombre"
             variant="outlined" fullWidth margin="normal" onChange={ ( e ) => {
                console.log( e.target.value );
                setName( e.target.value );
            }} value={ name } />

        <TextField id="lastName" label="Apellido" 
            variant="outlined" fullWidth margin="normal" />
        <TextField id="email" label="E-mail" 
            variant="outlined" fullWidth margin="normal" />

        <FormGroup >

            <FormControlLabel control={<Switch defaultChecked />} label="Promociones" />
            <FormControlLabel control={<Switch defaultChecked />} label="Novedades" />

        </FormGroup>
            
        <Button variant="contained" color="success" >
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