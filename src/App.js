// import logo from './logo.svg';
// import './App.css';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { Navbar } from "./Navbar";
import { Home } from "./Home";

import { ScreenTime } from "./ScreenTime";
import { Diet } from "./Diet";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          
          <Route exact path= '/screentime'>
            <ScreenTime/>
          </Route>
       
          <Route exact path = '/Diet'>
            <Diet/>
          </Route>

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
