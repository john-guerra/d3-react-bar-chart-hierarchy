import React, { useState, useEffect } from "react";
import "./App.css";
import * as d3 from "d3";

import BarchartHierarchyWrapper from "./BarchartHierarchyWrapper.jsx";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    d3.json("./flare-2.json").then(data => setData(data));
  }, []); // Run only once

  const getNewNode = () => ({ name: "" + Math.random(), children: [] });

  const onAddNode = () => {
    if (!data) return;

    const children = data.children.concat([getNewNode()]);
    const newData = Object.assign({}, data, { children: children });
    console.log("add node", newData);
    setData(newData);
  };

  console.log("App render", data);
  return (
    <div className="App">
      <h1>D3 + React</h1>
      <button onClick={onAddNode}>Add Node</button>

      {data ? (
        <BarchartHierarchyWrapper data={data}></BarchartHierarchyWrapper>
      ) : (
        <div>Loading data</div>
      )}
    </div>
  );
}

export default App;
