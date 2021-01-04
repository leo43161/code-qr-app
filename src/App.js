import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Home></Home>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
