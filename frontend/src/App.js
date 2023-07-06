import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReloadOnBackButton from './ReloadOnBackButton';
import { MentorHome, Testimonial, Mentor, Companies } from './components/pages';
import { Header, Footer } from './components/layout';

const Home = () => {
  console.log("Home")
  return <h2>Home Page</h2>;
};

const Profile = () => {
  return <h2>Profile Page</h2>;
};

const Logout = () => {
  return <h2>Logout Page</h2>;
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

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout" component={Logout} />
        <Route path="/mentor" component={MentorPage} />
      </Switch>

      <ReloadOnBackButton />
      <Footer />
    </div>
  );
}

export default App;
