import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
const HolaMundo = (params) => {
    const Hello ='Hola mundo';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            {isTrue ? <h4>True</h4> : <h4>Falso</h4> }
        </div>
    )
}
export default HolaMundo;