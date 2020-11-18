import React from "react";
import ClassContainer from "./ClassContainer";
import Header from "./header";

function ChangeTheme() {
    const [isOn, setLight] = React.useState(true);
    const luminosity = isOn ? "light" : "dark";
    return (
    <div className={`ChangeTheme ${luminosity}`}>
    <Header />
    <ClassContainer />
      <br/>
      <button id="change" onClick={() => setLight(!isOn)}>Change Theme</button>  
      
    </div>
   );
  }

  export default ChangeTheme