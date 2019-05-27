import React from "react";

export default props => (
    <div>
        <p classname="App-intro">{props.text} </p>
        <p classname="App-intro">{props.text2} </p>
        <p classname="App-intro">{props.myFunc(1, 2)} </p> 
    </div>
);

export const body2 = () => (
    <div>
      <div>hi</div>
    </div>
);

export const body3 = () => (
    <div>
        <div>hi</div>
    </div>
);