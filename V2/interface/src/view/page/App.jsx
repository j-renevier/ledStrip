import Router from 'preact-router';
import { h, render } from 'preact';

import { useEffect, useState } from 'preact/hooks';

import Home from './Home';
import Dashboard from './Dashboard';

import './base.css'
import './app.css'



const App = () => {
  
  const [host, setHost] = useState('192.168.1.189')
  const protocole = 'http';
  const port = '80';
  const rootApi = '/api/';

  const basePath = import.meta.env.VITE_BASE_PATH || '/'


  useEffect(()=>{console.log('app')}, [])

  return(
    <Router>
      <Dashboard path={basePath + "/"}  protocole={protocole} host={host} setHost={setHost} port={port} root={rootApi}/>
      <Home path={basePath + "/home"}  protocole={protocole} host={host} setHost={setHost} port={port} root={rootApi}/>

    </Router>
  )
}

export default App;

