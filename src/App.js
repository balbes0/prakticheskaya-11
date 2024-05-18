import React from "react";
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js";
import "./App.css"

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Header></Header>
        <MainContent></MainContent>
      </div>
    )
  }
}

export default App