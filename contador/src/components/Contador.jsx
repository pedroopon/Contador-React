import React, { useState } from 'react';
import './Contador.css'



function Contador() {

    const [contador, setContador] = useState(0);

    const incrementar = () => {

        setContador(contador + 1);

    };

    const decrementar = () => {

        setContador(contador - 1);

    };


    return (

        <div className='container'>


            <div className="visor">
                <h2>Contador</h2>

                <p>Valor: {contador}</p>

            </div>

            <div className="btn">

                <button className='add' onClick={incrementar}>Incrementar</button>

                <button className='menos' onClick={decrementar}>Decrementar</button>

            </div>

        </div>

    );

}

export default Contador; 