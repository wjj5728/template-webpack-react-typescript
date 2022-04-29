import { useState } from "react";
import { add } from "../utils";
import img from "../images/1.png";
import img1 from "../images/FRLPOMgVcAAP5my.jpg";
import "../scss/index.scss";

function Test() {
  const [val, setVal] = useState(0);
  const click = () => {
    console.log(222);
    setVal(add(Math.random(), Math.random()));
  };
  return (
    <>
      <p onClick={click}>{val}</p>
      <p className="red">1</p>
      <img src={img} alt="" />
      <img src={img1} alt="" />
    </>
  );
}
export default Test;
