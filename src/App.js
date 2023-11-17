import React, { useState } from 'react';
import './App.css';

const TwoBlocks = ()=> {
  const [blocks, setBlocks] = useState(["red", "blue"])

  function ChangeColor(){
    const updatedBlocks = [...blocks];
    updatedBlocks.reverse();
    setBlocks(updatedBlocks);
  }
  return (
    <div className='container'>
      <div className={blocks[0]} onClick={() => ChangeColor(0)}></div>
      <div className={blocks[1]} onClick={() => ChangeColor(1)}></div>
    </div>
  );
}

export default TwoBlocks;
