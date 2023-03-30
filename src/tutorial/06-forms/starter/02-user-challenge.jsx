import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);

    if (!name) return;
    const fakeId = Date.now();
    console.log(fakeId);

    const newUser = { id: fakeId, name };
    const updatedUser = [...user, newUser];
    console.log(
      "🚀 ~ file: 02-user-challenge.jsx:18 ~ handleSubmit ~ updatedUse:",
      updatedUser
    );
    setUser(updatedUser);

    setName("");
  };

  const removeUser = (id) => {
    const updatedUser = user.filter((person) => person.id !== id);
    setUser(updatedUser);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>user</h2>

      {user.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button onClick={() => removeUser(user.id)} className="btn">
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
