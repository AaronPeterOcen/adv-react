import { useState } from "react";

const ControlledInputs = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  // const handleChange = (e) => {
  //   setUser(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    console.log(user, email);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default ControlledInputs;
