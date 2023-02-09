import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
  };

  return (
    <div>
      <h1>COUNTER</h1>
      <h2>{count}</h2>
      <input
        type="text"
        onChange={(e) => setIncrementAmount(e.currentTarget.value)}
      />
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(addValue));
          }}
        >
          Increment by {incrementAmount}
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default Counter;
