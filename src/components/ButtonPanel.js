import React, { useState } from 'react';
import './ButtonPanel.css';
import Button from './Button';
import * as Math from 'mathjs';

const btnValues = [
  "AC", "(", ")", "DE", "1", "2", "3", "/", "4", "5", "6", "*", "7", "8", "9", "-", ".", "0", "=", "+"
];


function ButtonPanel() {
  let [input, setInput] = useState("");

  const handleClick = e => {
   
    const value = e.target.innerHTML;
    if ((input === "0") || (input === "Invalid") ){
      setInput("" + value)
    }
    else {
      setInput(input + value)
    }
  }

  const resetFunction = () => {
    setInput("");
  };

  const deleteFunction = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1))
    }
  }

  const equalFunction = () => {
    try {
      const value = Math.evaluate(input)
      setInput(value.toString())
    }
    catch (e) {
      setInput("Invalid")
    }
  }

  return (

    <div className="calculator">

      <div className='display'>{input}</div>
      {
        btnValues.map((btn, i) => {
          return (
            <Button
              key={i}
              value={btn}
              onClick={
                btn === "AC"
                  ? resetFunction
                  : btn === "DE"
                    ? deleteFunction
                    : btn === "="
                      ? equalFunction
                      : handleClick
              }
            />
          );
        })
      }
    </div>

  );
}

export default ButtonPanel;
