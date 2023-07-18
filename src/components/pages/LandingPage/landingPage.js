import React from 'react';


import { Navbar ,Footer} from '../../layout';

import IntroScreen from "./IntroScreen/IntroScreen";

import Companies from './companies/companies';
import UserType from "./UserType/UserType";


function LandingPage() {
  return (
    <div>
      <div>
      <Navbar />
      <IntroScreen />
      <UserType />
      <Companies />
      <Footer />
    </div>
    </div>
  )
}

export default LandingPage
