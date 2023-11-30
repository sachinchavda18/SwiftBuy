// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementAsync, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync())}>Increment Async</button> */}
    </div>
  );
}
