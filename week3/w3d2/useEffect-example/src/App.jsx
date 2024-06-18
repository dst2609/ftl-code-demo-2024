import React, { useEffect, useState } from "react";

const App = () => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    // console log here
    console.log("Current color: ", color);
    //function1
  }, [color]);

  return (
    <div
      style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
    >
      <p>Current Color: </p>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
};

export default App;
