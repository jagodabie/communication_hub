import { FC }from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './css/App.css';
import  Users from './components/Users/Users';
import Dashboard from './components/DashBoard/Dashboard';
import  { UsersForm } from './components/Users/UsersForm';
import  Navigation from './components/ui/layout/Navigation';

 const App:FC = () => {
  return (
  <div className="App">
    <Navigation/>
      <Switch>
        <Route exact path={"/"} component={Dashboard} />
        <Route exact path="/users" component={Users} />
        <Route path="/editUser/:id" component={UsersForm}/>
        <Route path="/createUser" component={UsersForm}/>
      </Switch>

  </div>
  );
}

export default App;
