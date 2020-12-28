import React from "react";

const Title = () => {
  return (
    <div className="title" onClick={() => console.log("title clicked")}>
      <h1>LightByDan</h1>
      <h2>A different light</h2>
      <p>Under construction!</p>
    </div>
  );
};

export default Title;
