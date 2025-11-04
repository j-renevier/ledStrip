import { Link } from "preact-router"
import { useEffect, useRef, useState } from "preact/hooks";

import { useApi } from "../../hooks/useApi";
import { useAppContext } from "../../context/AppContext";

import Popup from "../atome/Popup";
import SelectNetworks from "./networks/SelectNetworks"
import EllipsisVerticalIcon from "../atome/EllipsisVerticalIcon";

import './navigation.css'

const Navigation = ({page}) => {
  const popoverElementRef = useRef(null);

  const { protocole, host, port, rootApi } = useAppContext();
  const healthroot = `${protocole}://${host}:${port}${rootApi}health`;
  const { request } = useApi();
  const [version, setVersion ] = useState('Unknown version')

  useEffect(() => {
    (async () => {
      const result = await request('health', 'GET');
      setVersion(prev => result.version ?? prev)
    })()
  }, [])

  return (
    <nav>
      <div className="navigation">
        <button ref={popoverElementRef}>
          <EllipsisVerticalIcon style={{fill : '#FFFFFF'}}/>
        </button>
        <Popup popoverElementRef={popoverElementRef} className="navigation-developed">
          <SelectNetworks compact={true}/>
          <Link href="/">Commande</Link>
          <Link href="/home">Home</Link>
          <Link href="/networks">Réseaux</Link>
          <Link href="/lights">Lumières</Link>
          <Link href="/patterns">Schémas</Link>
          <Link href="/colors">Couleurs</Link>
          <Link href="/three">Three</Link>
          <Link href="/documentation" className={page ==='documentation' && 'current-page'}>Documentation</Link>
          <a href={healthroot} target="_blank" className="version">{version && `Version : ${version}`}</a>
        </Popup>
      </div>
    </nav>
  )
}

export default Navigation