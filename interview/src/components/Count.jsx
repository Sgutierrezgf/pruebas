import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const countButton = () => {
    setCount((count) => count + 1);
  };
  return (
    <div>
      <button onClick={countButton}>count is {count}</button>
    </div>
  );
}

export default Count;
