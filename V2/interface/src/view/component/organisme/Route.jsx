import Router from 'preact-router';
import { useEffect } from 'preact/hooks';

import { useAppContext } from '../../context/AppContext';
import { useInitValues } from '../../hooks/useInitValues';

import Home from '../page/Home';
import Dashboard from '../page/Dashboard';
import Documentation from '../page/Documentation';
import AddNewColor from './color/AddNewColor';

const Route = () => {
  const { basePath } = useAppContext()
  
  const {refresh } = useInitValues()

  return(
    <Router>
      <Dashboard path={basePath + ""} />
      <Home path={basePath + "home"} refresh={refresh}/>
      <Documentation path={basePath + "documentation"} />
      <AddNewColor path={basePath + "colors"} />
    </Router>

  )
}

export default Route;
