import React,{useState} from "react";


import Main from "./Menu/Main"
export default function ToggleNav() {
    const [showNavbar, setShowNavbar] = useState(true);

const toggleNavbar = () => {
  setShowNavbar(!showNavbar);
};
  return (
    <div>
      {showNavbar ? <Main/> : null}

      <div className="toggleNavbar">
      <button  onClick={toggleNavbar}><span>Toggle Navbar</span></button>
      </div>
</div>
  )
}
