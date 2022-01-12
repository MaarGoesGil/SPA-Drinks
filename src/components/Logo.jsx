import React from "react";
import { IoMdBeer } from "react-icons/io";

const Logo = () => {
  const estilo = {
    stroke: "black",
    strokeWidth: "5",
};

  return <IoMdBeer style={estilo} size="60" />;
};

export default Logo;
