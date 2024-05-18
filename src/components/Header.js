import React from "react";
import cocImage from "../images/coc.png";
import "../styles/Header.css"

class Header extends React.Component{
  render(){
    return(
        <header>
            <img src={cocImage} alt="Clash of Clans" className="clashofclansimg" />
            <button>Home</button>
            <button>News</button>
            <button>Clan Wars Analyse</button>
            <button>Friends Activity</button>
            <button className="singup">Sign Up</button>
        </header>
    )
  }
}

export default Header