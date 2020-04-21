import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCrytomoneda from '../hooks/useCrytomoneda';
import axios from 'axios';
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

    //state del listado de crytomonedas
    const [listacrypto, guardarCryptomonedas] = useState([]);
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
    },[])
    return ( 
        <form>
            <SelectMonedas />
            <SelectCrypto />
            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
     );
}
 
export default Formulario;