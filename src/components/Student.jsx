import React from "react";
import PropTypes from "prop-types";


function Student(props) {
  var imageStyle = {
    width: "200px",
    maxHeight: "200px",
    backgroundColor: "blanchedalmond",
    marginLeft: "auto",
    marginRight: "auto",
  };
  var studentStyle = {
    width: "300px",
    height: "400px",
    textAlign: "center",
    // padding: "15",
    backgroundColor: "blanchedalmond",
    margin: "5px",
  };
  var galleryStyle = {
    // margin: "0 auto 0 auto",
  };
  var contentStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
        
    // margin: "1% 1%",
    //display: "flex",
  };
  return(
    
    <div style={contentStyle} className="">
      <div style={galleryStyle} className="">
        <div style={studentStyle} className="col s3 card">
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