import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Candidates from './components/pages/Candidates/Candidates';
import { MentorHome, Testimonial, Mentor, Companies } from './components/pages';

import {Header,Footer} from './components/layout';
import  ReloadOnBackButton from "./ReloadOnBackButton";


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
