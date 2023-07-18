import React from 'react';
import {Switch, Route} from 'react-router-dom';

import  ReloadOnBackButton from "./services/ReloadOnBackButton";

import {

   LandingPage, 
   MentorHome, 
   CompanyHome, 
   CandidateHome, 
   Login,
   SignUp,
   jobList,
   jobDescription,
   jobPosting,
   preferences,
   internshipdet
  } from './components/pages';


function App() {
  return (
    <div className="App">

        <Switch>
          
          <Route exact path='/' component={LandingPage}/>   {/* Requires Rework */}

          <Route path='/home/candidate' component={CandidateHome}/> {/* Requires Rework */}
          <Route path='/home/mentor' component={MentorHome}/> {/* Requires Rework */}
          <Route path='/home/company' component={CompanyHome}/> {/* Requires Rework */}

         
     
          <Route path="/login/:type" component={Login} />
         <Route path="/signup/:type" component={SignUp} />
     
          <Route path='/job/list' component={jobList}/>
          <Route path='/job/description' component={jobDescription}/>
          <Route path='/post/job' component={jobPosting}/>
          
          <Route path='/candidate/prefer' component={preferences}/>

          <Route path='/internship/internshipdet' component={internshipdet}/>
        </Switch>

        <ReloadOnBackButton />
    </div>
  );
}

export default App;
