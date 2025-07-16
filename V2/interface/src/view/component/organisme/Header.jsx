import Logo from "../molecule/Logo";
import Navigation from "./navigation";

import './header.css'

const Header = ({page}) => {
  return (
    <header>
      <div className="header-wrapper">
        <Logo color="#FFFFFF"/>
        <Navigation page={page}/>
      </div>
    </header>
  )
}

export default Header