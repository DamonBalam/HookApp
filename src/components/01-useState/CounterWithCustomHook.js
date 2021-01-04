import React from 'react'
import { useCounter } from '../../hooks/useCounter';

import './counter.css';



export const CounterWithCustomHook = () => {

    const { state, increment, reset , decrement } = useCounter(15);

    return (
        <>
            <h1> Counter with Hook: { state } </h1>   
            <hr/>
            <button className='btn btn-primary'        onClick={ () => increment(2) } > + 1</button>
            <button className='btn btn-warning mx-4'   onClick={  reset } > Reset </button>
            <button className='btn btn-secondary mx-4' onClick={ () => decrement(2) } > - 1</button>
        </>
    )
}
