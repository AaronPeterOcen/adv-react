import { useState } from "react";
const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log(123);
      setCount((currState) => {
        const newState = currState;
        return newState + 1;
      });
    }, 2000);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Clicked
      </button>
    </div>
  );
};

export default UseStateGotcha;
