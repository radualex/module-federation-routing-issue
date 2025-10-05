import React from "react";
import { useLocation } from "react-router-dom";

const HelloWorld: React.FC = () => {
  const location = useLocation();
  
  return <div>Hello, World! Current path: {location.pathname}</div>;
};

export default HelloWorld;