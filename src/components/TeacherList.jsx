import React from "react";
import Student from "./Student";
import elly from "../assets/img/elly.jpg";
import ben from "../assets/img/ben.jpg";
import josh from "../assets/img/josh.jpg";
import reese from "../assets/img/reese.jpg";
import travis from "../assets/img/travis.jpg";

var masterTeacherList = [
  {
    name: "Elly",
    photo: elly,
    quote: "Happy coding y'all",
  },
  {
    name: "Ben",
    photo: ben,
    quote: "You can call me Elly if you want to",
  },
  {
    name: "Josh",
    photo: josh,
    quote: "3! 2! 1! Clap!"
  },
  {
    name: "Reese",
    photo: reese,
    quote: "*laughing*"
  },
  {
    name: "Travis",
    photo: travis,
    quote: "*Hand gesture*"
  },
];

function TeacherList(){
  return(
    <div>
      {masterTeacherList.map((Teacher, index) =>
        <Student name={Teacher.name}
          photo={Teacher.photo}
          quote={Teacher.quote} 
          key={index}/> 
      )}
    </div>
  );
}


export default TeacherList;