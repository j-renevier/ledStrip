import { Link } from "preact-router"

import { useAppContext } from "../../context/AppContext";

import LightbulbIcon from "../atome/LightbulbIcon"

import './logo.css'

const Logo = ({color = "#000000"}) => {
  const { basePath } = useAppContext();

  const goToMain = (basePath) => {
    const currentPath = window.location.pathname.replace(basePath, '/') || '/';

    if (currentPath === '/') {
      return basePath + 'home';
    }
    return basePath;
  };

  return (
      <Link href={goToMain(basePath)} className={"logo-wrapper"}>
        <div className='logo'>
          <LightbulbIcon style={{fill: color}}/>
        </div>
      </Link>
    
  )
}

export default Logo