import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeAllItem = () => {
    setPeople([]);
  };

  const removeItem = (id) => {
    const newP = people.filter((person) => person.id !== id);
    setPeople(newP);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              onClick={() => {
                removeItem(id);
              }}
            >
              remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={removeAllItem}>
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
