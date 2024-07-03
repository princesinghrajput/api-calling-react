import { useState } from "react";

import animal from "../assets/animal.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Counter = () => {
  const [count, SetCount] = useState(0);
  console.log("value of counte is:" + count);

  const incCount = () => {
    SetCount(count + 1);
  };

  const decCount = () => {
    if (count > 0) SetCount(count - 1);
  };
  return (
    <>
      <h1>Counter App</h1>

      <div>
        <h2>Count: {count}</h2>
        <img src={animal} alt="Animal" />

        <div>
          <button onClick={incCount}>Increment</button>

          <button onClick={decCount}>Decreement</button>
        </div>

        <CiHeart />
        <FaHeart />
      </div>
    </>
  );
};

export default Counter;
