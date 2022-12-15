import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
         <div className='pages'>
          <Routes>
          <Route
              path="/"
              element={<Home />}
            />
            <Route
            path="/lineup"
            element={<Lineup />}
            />
          </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
