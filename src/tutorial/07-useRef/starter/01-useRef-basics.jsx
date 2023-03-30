import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(
      "🚀 ~ file: 01-useRef-basics.jsx:7 ~ UseRefBasics ~ isMounted:",
      "re-re"
    );
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(
      "🚀 ~ file: 01-useRef-basics.jsx:17 ~ handleSubmit ~ name:",
      name
    );
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
