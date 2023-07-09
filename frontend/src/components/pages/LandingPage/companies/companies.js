import React from 'react'
import './companies.css'
import stanford from '../../../../static/design/stanford.png';
import microsoft from '../../../../static/design/microsoft.png';
import intel from '../../../../static/design/intel.png';
import infosis from '../../../../static/design/infosis.png';




const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerwidth flexCenter c-container">
            <img src={stanford} alt="stanford" />
            <img src={microsoft} alt="micorosoft" />
            <img src={infosis} alt="infosis" />
            <img src={intel} alt="intel" />
        </div>
    </section>
  )
}

export default Companies