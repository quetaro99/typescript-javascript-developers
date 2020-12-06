import React, { useState }from 'react';

const Counter:React.FC<{}> = () =>{
  const [value, setValue] =useState(0);
  
  return (
    <div>value: {value}
    <button>+1</button>
    <button>-1</button>
    </div>
    );
};

export default Counter;

