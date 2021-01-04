import './App.css';
import './bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import LogHome from './components/LogHome';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/loghome">
          <LogHome></LogHome>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
