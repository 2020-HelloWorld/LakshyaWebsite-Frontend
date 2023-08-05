import React from 'react'
import { Navbar ,Footer} from '../../../layout';
import ApplyNowStates from './applynowstates';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
const JobDescription = () => {
  const { jobId } = useParams();
  return (
    <>
    <Navbar />
     <ApplyNowStates jobId={jobId}/>
    <Footer />
    </>
  )
}

export default JobDescription