import React, { useState } from "react";

export default function Test() {
  const [str, setStr] = useState("123");

  const handle = () => {
    setStr((prev) => {
      return prev * 1 + 333 + "";
    });
  };
  return <div onClick={handle}>TEST: {str}</div>;
}
