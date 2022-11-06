import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';

import signin from './Component/signin.component';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={signin} />
    </Switch>
    </Router>
  );
}

export default App;
