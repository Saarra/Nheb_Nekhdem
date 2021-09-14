import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/authentification/login/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './components/authentification/signup/SignUp';
import Home from './components/home/Home';
import authentification from './components/authentification/authentification';


function App() {
  return (
    <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/auth" component={authentification} />
          </Switch>
    </Router>
  );
}

export default App;
