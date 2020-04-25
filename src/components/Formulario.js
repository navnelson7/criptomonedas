import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCrytomoneda from '../hooks/useCrytomoneda';
import axios from 'axios';
import PropTypes from 'prop-types';
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
const Formulario = ({guardarCryptomoneda,guardarMoneda}) => {

    //state del listado de crytomonedas
    const [listacrypto, guardarCryptomonedas] = useState([]);
    //state para manejar los errores
    const [error, guardarError] = useState(false);
    const MONEDAS =[
        {codigo:'USD', nombre:'Dolar de Estados Unidos'},
        {codigo:'MXN', nombre:'Pesos Mexicano'},
        {codigo:'EUR', nombre:'Euro'},
        {codigo:'GDP', nombre:'Libra Esterlina'},
        {codigo: 'SVC',nombre:'USD El Salvador'}
    ]
    //utilizar useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elije tu moneda','',MONEDAS);
    //utilizar useCryptomoneda
    const [cryptomoneda,SelectCrypto] = useCrytomoneda('Elije tu Crypto Moneda','',listacrypto)
    //ejecutar llamada al api
    useEffect(()=> {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCryptomonedas(resultado.data.Data); 
        }
        consultarAPI();
    },[]);

    //funcion cotizar moneda
    const cotizarMoneda = e => {
        e.preventDefault();

        //validar si ambos campos estan llenos
        if(moneda === '' || cryptomoneda === ''){
            guardarError('true');
            return;
        }
        //pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCryptomoneda(cryptomoneda);
    }
    return ( 
        

        <form
            onSubmit={cotizarMoneda}
        >
            { error ?<Error mensaje="Todos los campos son obligatorios"/> :null }
            <SelectMonedas />
            <SelectCrypto />
            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
Formulario.propTypes = {
    cotizarMoneda: PropTypes.func.isRequired
}
export default Formulario;