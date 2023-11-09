// Code Keypad Component Here
import React from 'react';
//import ReactDOM from 'react-dom';

function Keypad(){
    function handleChange(){
        console.log('Entering password...')
    }

    return <input type="password" onChange={handleChange} />
}

export default Keypad;