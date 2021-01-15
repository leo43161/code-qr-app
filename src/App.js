import './App.css';
import './bootstrap.min.css';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import LogHome from './components/LogHome';
import AddQr from './components/AddQr';
import ListaQr from './components/ListaQr';
import CodeQRView from './components/CodeQRView';
import BurnQr from './components/BurnQr';

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
        <Route exact path="/addqr">
          <AddQr></AddQr>
        </Route>
        <Route exact path="/listaqr">
          <ListaQr></ListaQr>
        </Route>
        <Route exact path="/codeqrview">
          <CodeQRView></CodeQRView>
        </Route>
        <Route exact path="/burnqr">
          <BurnQr></BurnQr>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
