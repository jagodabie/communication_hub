import React, { FC }from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';

import './css/App.css';
import  { Form } from './components/Form';
import  Users  from './components/Users/Users';
//import Dashboard from './components/DashBoard/DashBoard';

 const App:FC = () => {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/tutorials"} className="navbar-brand">
        bezKoder
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>
    <Button variant="contained">Contained</Button>


    <div className="container mt-3">
      <Switch>
    
        <Route exact path={"/form"} component={Form} />
        <Route exact path="/users" component={Users} />
        <Route path="/editUser/:id" component={EditUser}/>
      </Switch>
    </div>
  </div>
   /* <div className="App">
      <Form 
        name={''}
        surname={''}
        login={''}
        job={''}
        password={''}
        confirmPassword={''}
        isSuperUsers={false} file={{}}
      />
      <Users/>
      <Route path="/tutorials/:id" component={Tutorial} />
    </div>*/
  );
}

export default App;
