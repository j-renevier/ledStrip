import { h } from 'preact';
import Router from 'preact-router';
import Home from './Home';
import { useState } from 'preact/hooks';
import Dashboard from './Dashboard';

import './app.css'

const App = () => {

  const [host, setHost] = useState('192.168.1.189')
  const protocole = 'http';
  const port = '80';
  const root = '/api/';

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