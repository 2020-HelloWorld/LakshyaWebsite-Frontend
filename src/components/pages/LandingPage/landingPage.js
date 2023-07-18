import React from 'react';


import { Navbar ,Footer} from '../../layout';

import IntoScreen from "./IntroScreen/IntroScreen";

import Companies from './companies/companies';
import UserType from "./UserType/UserType";


function LandingPage() {
  return (
    <div>
      <div>
      <Navbar />
      <IntoScreen />
      <UserType />
      <Companies />
      <Footer />
    </div>
    </div>
  )
}

export default LandingPage
