import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import styled from "styled-components";

const Trigger = ({ isOpen, title, fontSize }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        cursor: "pointer",
        // ,paddingBottom: hover ? "10px" : "0px"
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <p className="triggerTitle">{title}</p>
      <FiPlusCircle
        style={{
          fontSize: "1em",
          color: hover ? "#3060a8" : "white",
          // position: "absolute",
          right: "10px",
          top: "10px",
          transition: "transform 450ms",
          transform: isOpen ? "rotate(225deg)" : "rotate(0deg)",
        }}
      />
    </div>
  );
};

export default Trigger;
