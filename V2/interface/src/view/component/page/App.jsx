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