'use client';

import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="w-[500px] mx-auto">
      <h1 className="text-center text-5xl font-semibold">Counter App</h1>
      <div className="flex flex-col items-center">
        <div className="flex text-7xl ">
          <button onClick={decrement} type="button">
            -
          </button>
          <div>{counter}</div>
          <button onClick={increment} type="button">
            +
          </button>
        </div>
        <button onClick={reset} type="button" className="bg-slate-700 p-2 rounded-lg text-white">
          Reset
        </button>
      </div>
    </div>
  );
};
