import React from "react";
import { Switch, Route } from "react-router-dom";
import StudentList from "./StudentList";
import Home from "./Home";
import NavBar from "./NavBar";
import TeacherList from "./TeacherList";
import Error404 from "./Error404";

function App(){
  var siteStyle = {
    backgroundColor : "burlywood",
  };
  return (
    <div style={siteStyle} className="container">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <div className="row">
          <Route path ='/Yearbook' component={StudentList} />
          <Route path ='/Teachers' component={TeacherList} />
        </div>

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;