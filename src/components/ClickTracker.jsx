import React, { useState, useEffect } from "react";

function ClickTracker() {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = `Click Counter ${count} times`;
    console.log(`Counter Update ${count}`);
  }, [count]);
  return (
    <div>
      <p>You Clicked {count} Times</p>
      <button onClick={counter}>Count</button>
    </div>
  );
}

export default ClickTracker;
