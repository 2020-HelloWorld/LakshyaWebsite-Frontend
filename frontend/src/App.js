import React from 'react';
import {Switch, Route} from 'react-router-dom';


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
        </Switch>
      
      <Footer/>
    </div>
  );
}

export default App;
