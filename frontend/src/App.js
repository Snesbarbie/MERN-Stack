import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Nav from './components/Nav'
import Tickets from './pages/Tickets';
import Travel from './pages/Travel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
         <div className='pages'>
          <Routes>
          <Route
              path="/tickets"
              element={<Tickets />}
            />
          <Route
              path="/"
              element={<Home />}
            />
            <Route
            path="/lineup"
            element={<Lineup />}
            />
            <Route
            path="/travel"
            element={<Travel />}
            />
          </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
