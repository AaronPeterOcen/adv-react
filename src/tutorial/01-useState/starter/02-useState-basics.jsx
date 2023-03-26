import { useState } from "react";

const UseStateBasics = () => {
  //destructuring
  // const value = useState("peter")[0];
  // console.log(value);

  const [count, setCount] = useState(0);
  // console.log(count, setCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h4>Clicked {count} times</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Clicked
      </button>
    </div>
  );
};

export default UseStateBasics;
