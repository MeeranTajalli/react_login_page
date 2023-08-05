import React from "react";
import Login from "./Login";

var isLoggedin = true;

function App() {
  return (
    <div className="container">
      <h1>{isLoggedin ? <h1>Hello User!</h1> : <Login />}</h1>
    </div>
  );
}

export default App;
