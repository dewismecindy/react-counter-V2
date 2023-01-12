import React, { useState } from "react";

const AddCounter = (props) => {
  let [addcounter, setAddCounter] = useState(1);
  return (
    <button
      onClick={() => {
        props.state(props.state + 1);
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
