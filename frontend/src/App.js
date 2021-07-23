// THIS IS THE ENTRY POINT TO OUR APP
// THE ONLY THING THAT SHOULD OCCUR HERE IS DIRECTING PEOPLE TO THE CORRECT PAGE OR RESOURCE

/***********
|  IMPORTS |
************/
import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/***********
|  PAGES   |
************/
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Tags from './pages/Tags';
import SignUp from './pages/SignUp';
import InitializeProfile from './pages/InitializeProfile';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import MatchList from './pages/MatchList';
import Settings from './pages/Settings';
import EmailVerification from './pages/EmailVerification';

/***********************************************************************************************************/

function App() {

  /* NOTICE THE <Switch> TAGS. THEY ACT LIKE SWITCH STATEMENTS IN C, BUT YOU DON'T HAVE TO 'break'
     AFTER A MATCHING 'case'. <Route> TAGS ARE LIKE THE CASES. <Redirect> ACTS LIKE THE 'default' CASE */

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* // INSERT HOME INDEX PAGE THAT YOU IMPORTED HERE */}
          <MainPage/>
        </Route>

        <Route path="/Login" exact>
          <Login/>
        </Route>

        <Route path="/Tags" exact>
          <Tags/>
        </Route>

        <Route path="/SignUp" exact>
          <SignUp/>
        </Route>

        <Route path="/InitializeProfile" exact>
          <InitializeProfile/>
        </Route>

        <Route path="/ResetPassword" exact>
          <ResetPassword/>
        </Route>

        <Route path="/Home" exact>
          <Home/>
        </Route>

        <Route path="/MatchList" exact>
          <MatchList/>
        </Route>

        <Route path="/Settings" exact>
          <Settings/>
        </Route>

        <Route path="/EmailVerification" exact>
          <EmailVerification/>
        </Route>

        <Redirect to="/" />
      </Switch>  
    </Router>
  );

}

/***********************************************************************************************************/

export default App;
