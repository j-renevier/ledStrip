import { Link } from "preact-router"

import SelectNetworks from "./SelectNetworks"
import LightbulbIcon from "../atome/LightbulbIcon"

const Header = ({ host, setHost, protocole, port, root, knowHosts}) => {
  const goToMain = () => {
    if (window.location.pathname === "/") {
      return '/home'
    } 
    return '/'
  }

  return (
    <header>
      <Link href={goToMain()}>
        <div className='logo'>
          <LightbulbIcon/>
          <span>Led Stripe</span>
        </div>
      </Link>
      <nav>
        <ul>
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/home">Acceuil</Link></li>
          <li>
            <details>
              <summary>Configuration</summary>
              <div className="details-elems">
                <SelectNetworks host={host} setHost={setHost} protocole={protocole} port={port} root={root} knowHosts={knowHosts} compact={true}/>
                <Link href="/network">Réseaux</Link>
                <Link href="/lights">Lumières</Link>
                <Link href="/patterns">Schémas</Link>
                <Link href="/colors">Couleurs</Link>
              </div>
            </details>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header