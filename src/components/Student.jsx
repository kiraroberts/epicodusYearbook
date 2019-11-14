import React from "react";
import PropTypes from "prop-types";


function Student(props) {
  var imageStyle = {
    width: "200px",
    maxHeight: "200px",
    backgroundColor: "blanchedalmond",
  };
  var studentStyle = {
    width: "300px",
    height: "300px",
    textAlign: "center",
    // order: "0",
    padding: "15",
    // alignSelf: "center",
  }
  var galleryStyle = {
    margin: "0 auto 0 auto",
    backgroundColor: "blanchedalmond"
  };
  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
        
    margin: "1% 1%",
    // display: "flex",
  };
  return(
    
    <div style={contentStyle}>
      <div style={galleryStyle}>
        <div style={studentStyle} >
          <h2 >{props.name}</h2>
          <img style={imageStyle} src={props.photo}/>
          <h5>"{props.quote}"</h5>
        </div>
      </div>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  quote: PropTypes.string,
};

export default Student;