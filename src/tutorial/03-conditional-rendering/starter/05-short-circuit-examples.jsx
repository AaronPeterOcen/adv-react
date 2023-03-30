import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("peter");
  const [user, setUser] = useState({ name: "aaron" });
  console.log(user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "hello word"}</h2>
      {text && (
        <div>
          <h2>please run from</h2>
          <h4>from {user.name}</h4>
        </div>
      )}
      {user && <SomeComponents name={user.name} />}
    </div>
  );
};

const SomeComponents = ({ name }) => {
  return (
    <div>
      <h2>please run from</h2>
      <h4>from {name}</h4>
    </div>
  );
};

export default ShortCircuitExamples;
