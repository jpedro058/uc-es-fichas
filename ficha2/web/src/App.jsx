import React, { useState } from "react";
import Component1 from "./components/component1";
import ShoppingList from "./components/shoppingList";

function App() {
  const [element, setElement] = useState("");
  const [shoppingList, setShoppingList] = useState([]);

  const [names, setNames] = useState([]);

  function getNames() {
    //http://localhost:9998/persons/list
    fetch("http://localhost:9998/persons/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNames(data);
        console.log("NAMES", names);
      });
  }

  return (
    <div className="bg-zinc-800 flex flex-col min-h-screen text-zinc-300 p-4 gap-4">
      <Component1 />

      <ShoppingList
        element={element}
        setElement={setElement}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />

      <div className="border-t-2">
        <div className="flex flex-col gap-2 w-fit mt-2">
          <select name="names" id="names">
            {names.map((name) => (
              <option key={name.name} value={name.name}>
                {name.name}
              </option>
            ))}
          </select>
          <button
            className="bg-zinc-600 hover:bg-zinc-500 text-zinc-200 px-2 rounded cursor-pointer"
            type="button"
            onClick={getNames}
          >
            Fetch Names
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
