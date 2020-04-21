import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color:#66a2fe;
    border: none;
    width: 100%;
    color:#fff;
    transition:background-color .3s ease;
    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;
const Formulario = () => {
    const MONEDAS =[
        {codigo:'USD', nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre:'Pesos Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GDP', nombre:'Libra Esterlina'},
        {codigo: 'SVC',nombre:'USD El Salvador'}
    ]
    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elije tu moneda','',MONEDAS);
    return ( 
        <form>
            <SelectMonedas />
            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;