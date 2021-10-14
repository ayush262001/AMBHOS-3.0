
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/HomePage/Home';
import SportsAcademy from './Components/SportsPage/Academy/Academy';
import ServiceProvider from './Components/ServiceProvider/ServiceProvider';
import SAcademyProfile from './Components/SportsProfile/Academy/AcademyProfile';
import STrainerProfile from './Components/SportsProfile/Trainer/AcademyProfile';
import SFitnessacademy from './Components/FitnessProfile/Academy/AcademyProfile';
import SFitnesstrainer from './Components/FitnessProfile/Trainer/AcademyProfile';
import SportsCoach from './Components/SportsPage/Coaches/Academy';
import FitnessAcademy from './Components/FitnessPage/Academy/Academy';
import FitnessCoaches from './Components/FitnessPage/Coaches/Academy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/sportsacademy" component={SportsAcademy} />
              <Route  path="/dashboard" component={ServiceProvider} />
              <Route path="/profile/sportsacademy" component={SAcademyProfile} />
              <Route path="/profile/sportstrainer" component={STrainerProfile} />
              <Route path="/profile/fitnessacademy" component={SFitnessacademy} />
              <Route path="/profile/fitnesstrainer" component={SFitnesstrainer} />
              <Route path="/sportscoach" component={SportsCoach} />
              <Route path="/fitnessacademy" component={FitnessAcademy} />
              <Route path="/fitnesstrainer" component={FitnessCoaches} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
