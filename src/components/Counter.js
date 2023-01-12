import React, { useState } from "react";

const Counter = (props) => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <div className="counter">
        <div className="buttons">
          <button
            className="buttonsNegAndPos"
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
          <button className="buttonCounter">{counter}</button>
          <button
            className="buttonsNegAndPos"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="reset">
        <button
          className="buttonReset"
          onClick={() => {
            setCounter((counter = 0));
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
