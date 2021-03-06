import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Cotizacion from './components/Cotizacion';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
    font-family: 'Bebas Neve', cursive;
    color: #fff;
    text-align:left;
    font-weight: 700px;
    font-size:50px;
    margin-bottom: 50px;
    margin-top:80px;
    &::after{
      content: '';
      width: 100px;
      height: 6px;
      background-color:#66a2fe;
      display:block;
    }
`;
function App() {
  const [moneda, guardarMoneda] = useState('');
  const [crytomoneda, guardarCryptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando,guardarCargando] = useState(false);

  useEffect(()=>{
    
    //evitamos la ejecucion la primera vez
    if(moneda === '') return;
    //consultar la api para obtener la cotizacion
      const cotizarCryptomoenda = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytomoneda}&tsyms=${moneda}`;
            const resultado = await axios.get(url);

            //cargando el spinner
            guardarCargando('true')
            //set timeout
            setTimeout(()=>{
              guardarCargando(false);                
              
              //guardando la cotizacion en el state
              guardarResultado(resultado.data.DISPLAY[crytomoneda][moneda]);
            },3000)
      }
      cotizarCryptomoenda(); 
    console.log('cotizanod');
  },[moneda,crytomoneda])

   //mostrar spinner
   const componente = (cargando) ? <Spinner />: <Cotizacion resultado={resultado}/> 

   
  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Imagen Cripto"
        ></Imagen>
      </div>
      <div>
        <Heading>
          Cotiza Cryptomonedas al Instante
        </Heading>
        <Formulario 
          guardarCryptomoneda={guardarCryptomoneda}
          guardarMoneda={guardarMoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
}

export default App;
