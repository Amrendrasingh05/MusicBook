import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';

import getStarted from './Component/getStarted.component';
import register1 from './Component/register1.component';
import register2 from './Component/register2.component';
import login from './Component/login.component';
import forgetpassword from './Component/forgetpassword.component';
import verification from './Component/verification.component';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={getStarted} />
      <Route exact path="/register1" component={register1} />
      <Route exact path="/register2" component={register2} />
      <Route exact path="/login" component={login} />
      <Route exact path="/forgetpassword" component={forgetpassword} />
      <Route exact path="/verification" component={verification} />
    </Switch>
    </Router>
  );
}

export default App;
