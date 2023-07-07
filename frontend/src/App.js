import React from 'react';
import {Switch, Route} from 'react-router-dom';

import  ReloadOnBackButton from "./ReloadOnBackButton";

import Candidates from './components/pages/Home/candidateHome/candidateHome';

import landingPage from './components/pages/LandingPage/landingPage';
import mentorHome from './components/pages/Home/mentorHome/mentorHome';
import partnerHome from './components/pages/Home/partnerHome/partnerHome';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={landingPage}/>
          <Route path='/Candidates' component={Candidates}/>
          <Route path='/mentorHome' component={mentorHome}/>
          <Route path='/partnerHome' component={partnerHome}/>
        </Switch>
        <ReloadOnBackButton />
    </div>
  );
}

export default App;
