// Counter.js

import React, { useState } from 'react';
import { useCallback } from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);

  const inc = useCallback(() => setCount((count) => count + 1), []);

  return (
    <div>
      <p>Count: {count}</p>
      {/* <label>
        <span>Username</span>
        <input />
      </label> */}
      <button onClick={inc}>Increment</button>
      {/* <button onClick={handleIncrement}>Increment</button> */}
    </div>
  );
};

export default Demo;
