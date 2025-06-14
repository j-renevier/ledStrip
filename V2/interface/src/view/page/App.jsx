import Router from 'preact-router';
import { useState } from 'preact/hooks';

import Home from './Home';
import Dashboard from './Dashboard';

import './base.css'
import './app.css'
import { useEffect } from 'react';

const App = () => {

  const [host, setHost] = useState('192.168.1.189')
  const protocole = 'http';
  const port = '80';
  const root = '/api/';

  useEffect(()=>{console.log("App");},[])

  return(
    <div id="app">
      <Router>
        <Dashboard path="/" protocole={protocole} host={host} setHost={setHost} port={port} root={root}/>
        <Home path="/home" protocole={protocole} host={host} setHost={setHost} port={port} root={root}/>
      </Router>
    </div>
  )
}

export default App;