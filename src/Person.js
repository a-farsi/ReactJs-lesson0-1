import React from "react";
import './Person.css';

const Person = props => {
  return (
    <div className="personComp">
      {/*When the paragraph is clicked, the method in the parent is called*/}
      <p onClick={props.click}>
        I'm {props.name} and my occupation is {props.occupation}
      </p>
    </div>
  );
};

export default Person;
