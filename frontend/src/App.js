import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Header,Footer} from './components/layout';



const Home = () => {
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
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
