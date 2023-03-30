import { useState } from "react";

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);
  console.log(
    "🚀 ~ file: 06-toggle-challenge.jsx:5 ~ ToggleChallenge ~ value:",
    value
  );

  // const toggle = () => {
  //   if (value) {
  //     setValue(false);
  //     return;
  //   }
  //   setValue(true);
  // };

  return (
    <div>
      <button className="btn" onClick={() => setValue(!value)}>
        toggle
      </button>
      {value && <SomeComponent />}
    </div>
  );
};

const SomeComponent = () => {
  return (
    <div>
      <h4>hello there</h4>
    </div>
  );
};

export default ToggleChallenge;
