import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import ReloadOnBackButton from './ReloadOnBackButton';
import { AboutUs, Companies, Hero, FlexButton } from './components/pages';
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

const Home = () => {
  return <h2>Home</h2>;
};

const Profile = () => {
  return <h2>Profile Page</h2>;
};

const Logout = () => {
  return <h2>Logout Page</h2>;
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
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="/company" component={Company} />
      </Switch>
      <ReloadOnBackButton />
    </div>
  );
}

export default App;
