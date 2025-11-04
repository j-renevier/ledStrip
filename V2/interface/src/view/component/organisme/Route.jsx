import Router from 'preact-router';
import { useEffect } from 'preact/hooks';

import { useAppContext } from '../../context/AppContext';
import { useInitValues } from '../../hooks/useInitValues';

import Home from '../page/Home';
import Dashboard from '../page/Dashboard';
import ColorsPage from '../page/ColorsPage';
import Documentation from '../page/Documentation';
import LightsPage from '../page/LightsPage';
import NetworksPage from '../page/NetworksPage';
import ThreePage from '../page/ThreePage';

const Route = () => {
  const { basePath } = useAppContext()
  
  const {refresh } = useInitValues()

  return(
    <Router>
      <Dashboard path={basePath + ""} />
      <Home path={basePath + "home"} refresh={refresh}/>
      <Documentation path={basePath + "documentation"} />
      <ColorsPage path={basePath + "colors"} />
      <LightsPage path={basePath + "lights"} />
      <NetworksPage path={basePath + "networks"} />
      <ThreePage path={basePath + "three"} />
    </Router>

  )
}

export default Route;
