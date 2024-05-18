import React from "react";
import voprosikImage from "../images/voprosik.png";
import "../styles/MainContent.css";
import AbobaImage from "../images/Aboba.png"

class MainContent extends React.Component{
  render(){
    return(
        <div className="div2">
        <div className="div3">
          <p className="redtextdiv3">sing up to unlock all features !</p>
          <p>here you can see every thing about your clash pf clans account. like clan wars, frindes activity and every thing. but you need to sign up first</p>
          <div className="div4">
            <button className="div4button">
              <span className="spanbuttondiv4">FAQ</span>
              <img src={voprosikImage} alt="asd" className="faqbutton" />
            </button>
            <button>get the app</button>
          </div>
        </div>
        <img src={AbobaImage} alt="not found" className="img" />
      </div>
    )
  }
}

export default MainContent