import { Link } from "preact-router"
import { useRef } from "preact/hooks";

import Popup from "../atome/Popup";
import EllipsisVerticalIcon from "../atome/EllipsisVerticalIcon";

import './navigation.css'

const Navigation = ({page}) => {
  const popoverElementRef = useRef(null);

  return (
    <nav>
      <div className="navigation">
        <button ref={popoverElementRef}>
          <EllipsisVerticalIcon style={{fill : '#FFFFFF'}}/>
        </button>
        <Popup popoverElementRef={popoverElementRef} className="navigation-developed">
          <Link href="/">Commande</Link>
          <Link href="/home">Home</Link>
          <Link href="/networks">Réseaux</Link>
          <Link href="/lights">Lumières</Link>
          <Link href="/patterns">Schémas</Link>
          <Link href="/colors">Couleurs</Link>
          <Link href="/three">Three</Link>
          <Link href="/documentation" className={page ==='documentation' && 'current-page'}>Documentation</Link>
        </Popup>
      </div>
    </nav>
  )
}

export default Navigation