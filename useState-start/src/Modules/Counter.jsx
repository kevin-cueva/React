import { useState } from 'react';
import PropTypes from 'prop-types';
export const Counter = ({ count }) => {
    
    /* Utilizamos el hook useState para gestionar el estado del contador */
    const [counter, setCounter] = useState(count);

    /**
     * Función que se encarga de sumar 1 al contador al hacerse click en el botón '+1'
     */
    const handleClickAdd = () => {
        setCounter(counter + 1);
    };
    /**
     * Función que se encarga de restar 1 al contador al hacerse click en el botón '-1'
     * */
    const handleClickMinus = () => {
        setCounter(counter - 1);
    };
    /**
     * Función que se encarga de resetear el contador al hacerse click en el botón 'Reset'
     * */
    const handleClickReset = () => {
        setCounter(count);
    }
    /* Renderizamos el componente */
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <div className='botones'>
                <button onClick={handleClickAdd}>
                    +1
                </button>
                <button onClick={handleClickMinus}>
                    -1
                </button>
                <button onClick={handleClickReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}
// Validación de props con PropTypes
Counter.propTypes = {
    count: PropTypes.number.isRequired, // 'count' debe ser un número y es requerido
};
// Exportamos el componente
export default Counter