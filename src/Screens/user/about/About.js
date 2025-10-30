import React, { useState } from "react";
import { Button } from "react-bootstrap";

const About = () => {
  // useState hook goes here (outside return)
  const [age, setAge] = useState(10);

  //  function to handle state change
  const handleClick = () => {
    setAge(20);
  };

  return (
    
      <Button onClick={handleClick}>{age}</Button>
    
  );
};

export default About;