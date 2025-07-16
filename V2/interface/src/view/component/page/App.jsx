import { h, render } from 'preact';

import { AppProvider } from '../../context/AppContext';

import Route from '../organisme/Route';

import './base.css'
import './app.css'

const App = () => {  

  return(
    <AppProvider>
      <Route/>
    </AppProvider>

  )
}

export default App;



// import { useAppContext } from '../context/AppContext';

// const ConfigDisplay = () => {
//   const { host, setHost, protocole, port, rootApi, basePath } = useAppContext();

//   return (
//     <div>
//       <h2>Configuration</h2>
//       <ul>
//         <li>Host: {host}</li>
//         <li>Protocole: {protocole}</li>
//         <li>Port: {port}</li>
//         <li>Root API: {rootApi}</li>
//         <li>Base path: {basePath}</li>
//       </ul>

//       <input
//         type="text"
//         value={host}
//         onChange={(e) => setHost(e.target.value)}
//         placeholder="Modifier le host"
//       />
//     </div>
//   );
// };

// export default ConfigDisplay;