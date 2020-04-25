import React from 'react';
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <div>
            <p>El presio es: <span>{resultado.PRICE}</span></p>
            <p>El precio mas alto del dia: <span>{resultado.HIGHDAY}</span></p>
            <p>El presio mas bajo del dia: <span>{resultado.LOWDAY}</span></p>
            <p>La variacion ultimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Ultima Actualizacion: <span>{resultado.LASTUPDATE }</span></p>
        </div>
     );
}
 
export default Cotizacion;