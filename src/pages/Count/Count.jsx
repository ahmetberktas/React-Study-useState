import CustomButton from "../../components/CustomButton/CustomButton";
import "./count.css";
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <h4 className="countTitle">Sayaç Sayfası</h4>
      <CustomButton
        buttonTitle="Arttır"
        onClick={() => setCount(count + 1)}
      ></CustomButton>
      <p className="countNum" style={{ color: count < 0 ? "red" : "black" }}>{count}</p>
      <CustomButton
        buttonTitle="Azalt"
        onClick={() => setCount(count - 1)}
      ></CustomButton>
    </div>
  );
};

export default Count;
