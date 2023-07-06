import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ReloadOnBackButton from './ReloadOnBackButton';
import { AboutUs,Companies,Hero ,mentorHome,Testimonial,Mentor} from './components/pages';
import {Header,Footer} from './components/layout';



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

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={Logout} />
          <Route path="/mentor" component={mentorHome} />
        </Switch>
<Companies/>
<Mentor/>
       <ReloadOnBackButton/>
       <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
