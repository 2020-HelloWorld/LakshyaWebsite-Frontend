import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Header,Footer} from './components/layout';
import  ReloadOnBackButton from "./ReloadOnBackButton";

import Candidates from './components/pages/Candidates/Candidates';
import { MentorHome, Testimonial, Mentor, Companies } from './components/pages';
import { Eval, Front, RecruitComp } from './components/pages';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <FlexButton />
      <Companies />
      <AboutUs />
      <Footer />
    </div>
  );
};


const MentorPage = () => {
  return (
    <>
      <MentorHome />
      <Companies />
      <Mentor />
      <Testimonial />
    </>
  );
};


const Company = () => {
  return( 
    <div className='companyHome'>
      <Header/>
      <Front/>
      <RecruitComp/>
      <Eval/>
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Candidates />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
        </Switch> */}

        <ReloadOnBackButton />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
