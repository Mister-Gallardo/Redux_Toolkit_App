import React from "react";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, setByAmount } from "../store/counter/Counter";

const Counter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(setByAmount(0))}>Set to 0</button>
    </div>
  );
};

export default Counter;
