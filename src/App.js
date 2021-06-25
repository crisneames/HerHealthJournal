import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './components/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login}/>
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
