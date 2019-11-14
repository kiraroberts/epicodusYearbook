import React from "react";
import office from "../assets/img/office.jpg";

function Home(){
  var headerStyle = {
    textAlign: "center",
    fontFamily: "Comic sans MS",
    textShadow: "2px 2px white",
  };
  var imageStyle = {
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  };
  var quoteStyle = {
    textAlign: "center"
  };
  return(
    <div>
      <h1 style={headerStyle}>Epicodus Yearbook</h1>
      <img style={imageStyle} src={office}></img>
      <h4 style={quoteStyle}>"You miss 100% of the shots you don't take." - Wayne Gretzky, - Michael Scott</h4>
    </div>
  );
};

export default Home;