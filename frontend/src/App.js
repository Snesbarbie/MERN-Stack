import {BrowserRouter, Routes, Route} from 'react-router-dom'


import Home from './pages/Home'
import Day1 from './pages/Day1'
import Day2 from './pages/Day2'
import Day3 from './pages/Day3'
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
            path="/lineup/day/1"
            element={<Day1 />}
            />
                        <Route
            path="/lineup/day/2"
            element={<Day2 />}
            />
                        <Route
            path="/lineup/day/3"
            element={<Day3 />}
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
