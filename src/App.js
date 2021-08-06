import './App.css';
import Login from './components/login';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/home' component={Home} />
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
