import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articlepage from './pages/Articlepage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<Articlepage />}></Route>
            {/* <Route exact path='/articles'>
              <Route exact path=':id' element={<Articlepage />}></Route>
            </Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App