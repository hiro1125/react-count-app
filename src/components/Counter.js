import React,{useState} from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onCountDown = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const Reset = () => setCount(0);

  return(
    <>
    <p>Count: {count}</p>
    <button className= 'ui primary button' onClick={onCountUp}>Increment</button>
    <button className= 'ui red button'  disabled={count === 0} onClick={onCountDown}>Decrement</button>
    <button className= 'ui green button'  disabled={count === 0} onClick={Reset}>Reset </button>
    </>
  );
};

export default Counter;
