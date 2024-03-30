import React from 'react';

const Buttons = ({ setNumber, number }) => {
    return (
        <div>
            <button onClick={() => setNumber(number - 1)}>-1</button>
            <button onClick={() => setNumber(number + 1)}>+1</button>
        </div>
    );
}

export default Buttons;
