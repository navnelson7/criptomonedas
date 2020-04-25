import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
//definiendo el style component
const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif,
`;

const Info = styled.p`
    font-size: 30px;
    span{
        font-weight:bold;
    }

`;

const Precio = styled.p`
    font-size: 38px;
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <ResultadoDiv>
            <Precio>El presio es: <span>{resultado.PRICE}</span></Precio>
            <Info>El precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>El presio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>La variacion ultimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualizacion: <span>{resultado.LASTUPDATE }</span></Info>
        </ResultadoDiv>
     );
}
Cotizacion.propTypes = {
    Cotizacion: PropTypes.func.isRequired
}
export default Cotizacion;