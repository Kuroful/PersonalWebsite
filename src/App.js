import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import ResumePage from './components/pages/ResumePage';
import Title from './components/Title';
function App() {
  return (
    <Router>
        <Title/>
        <Navbar />
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/Resume" exact component ={ResumePage} />
        </Switch>
    </Router>
  );
}

export default App;
