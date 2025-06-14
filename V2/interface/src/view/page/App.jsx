import Router from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

import Home from './Home';
import Dashboard from './Dashboard';

import './base.css'
import './app.css'

const App = () => {

  const [host, setHost] = useState('192.168.1.189')
  const protocole = 'http';
  const port = '80';
  const root = '/api/';

  useEffect(()=>{console.log('app')}, [])

  return(
    <div>
      <Router>
        <Dashboard path="/" protocole={protocole} host={host} setHost={setHost} port={port} root={root}/>
        <Home path="/home" protocole={protocole} host={host} setHost={setHost} port={port} root={root}/>
      </Router>
    </div>
  )
}

export default App;