
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/HomePage/Home';
import SportsAcademy from './Components/SportsPage/Academy/Academy';
import ServiceProvider from './Components/ServiceProvider/ServiceProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/sportsacademy" component={SportsAcademy} />
              <Route  path="/dashboard" component={ServiceProvider} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
