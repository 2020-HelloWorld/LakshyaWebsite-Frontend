import React from 'react';
import {Switch, Route} from 'react-router-dom';

import  ReloadOnBackButton from "./services/ReloadOnBackButton";

import {

   LandingPage, 
   MentorHome, 
   CompanyHome, 
   CandidateHome, 
   candidateLogin, 
   companyLogin, 
   mentorLogin,
   jobList,
   jobDescription,
   jobPosting,
   preferences
  } from './components/pages';


function App() {
  return (
    <div className="App">

        <Switch>
          
          <Route exact path='/' component={LandingPage}/>   {/* Requires Rework */}

          <Route path='/home/candidate' component={CandidateHome}/> {/* Requires Rework */}
          <Route path='/home/mentor' component={MentorHome}/> {/* Requires Rework */}
          <Route path='/home/company' component={CompanyHome}/> {/* Requires Rework */}

          <Route path='/candidate/login' component={candidateLogin}/>
          <Route path='/company/login' component={companyLogin}/>
          <Route path='/mentor/login' component={mentorLogin}/>

          <Route path='/job/list' component={jobList}/>
          <Route path='/job/description' component={jobDescription}/>
          <Route path='/post/job' component={jobPosting}/>
          
          <Route path='/prefer' component={preferences}/>
        </Switch>

        <ReloadOnBackButton />
    </div>
  );
}

export default App;
