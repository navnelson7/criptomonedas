import React,{Fragment,useState} from 'react';
import styled from '@emotion/styled';
//definiendo el stylecomponent
const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;
 const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance:none;
    border-radius: 10%;
    border:none;
    font-size:1.2rem;
 `;
const useCrytomoneda = (label,stateInicial,opciones) =>{
     
    //state de nuestro customhooks
    const [state, actualizarState] = useState(stateInicial);
    const SelectCrypto = () =>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value )}
                value={state}
            >
                <option value=''>Seleccione</option>
                {opciones.map(opcion =>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    )
    //retornar state , interfaz y funcion que modifica el state
    return [state, SelectCrypto, actualizarState]
}
export default useCrytomoneda