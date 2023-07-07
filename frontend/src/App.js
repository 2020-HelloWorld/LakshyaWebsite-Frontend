import React from 'react';
import {Switch, Route} from 'react-router-dom';

import  ReloadOnBackButton from "./ReloadOnBackButton";

import { LandingPage, MentorHome, CompanyHome, CandidateHome } from './components/pages';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home/candidate' component={CandidateHome}/>
          <Route path='/home/mentor' component={MentorHome}/>
          <Route path='/home/company' component={CompanyHome}/>
        </Switch>
        <ReloadOnBackButton />
    </div>
  );
}

export default App;
