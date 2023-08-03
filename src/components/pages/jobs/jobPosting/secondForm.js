import React,{useRef,useState,useEffect} from 'react';


import bold from '../../../../static/logo/bold.svg'
import italic from '../../../../static/logo/italic.svg'
import left from '../../../../static/logo/left.svg'
import right from '../../../../static/logo/right.svg'
import center from '../../../../static/logo/center.svg'

const SecondForm = ({formData, onChange, onPreviousStep}) => {
    const textBoxRef = useRef(null);
   
    

    const handleGoBack = () => {
        // Use history.goBack() to navigate back to the previous page
        onPreviousStep();
      };

    const handleSubmit = () => {
        // Do something with the form data when the submit button is clicked
        console.log("Form submitted!");
      };

    const [skills, setSkills] = useState([
        { id: 1, content: "",isSelected:false},
      ]);

      const [applicants, setApplicants] = useState([
        { id: 1, content: "", isSelected: false },
      ]);
      const [perks, setPerks] = useState("");

  
  
  const handlePerksChange = (event) => {
    setPerks(event.target.value);
  };

  

  const handleBoldClick = () => {
    document.execCommand('bold', false, null);
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, null);
  };

  const handleAlignLeftClick = () => {
    document.execCommand('justifyLeft', false, null);
  };

  const handleAlignCenterClick = () => {
    document.execCommand('justifyCenter', false, null);
  };

  const handleAlignRightClick = () => {
    document.execCommand('justifyRight', false, null);
  };

  const handleAddSkill = () => {
    setSkills((prevSkills) => [
      ...prevSkills,
      { id: Date.now(), content: "", isSelected: true }, // Set isSelected to true for the last added skill
    ]);
  };

  const handleSkillChange = (event, id) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, content: event.target.textContent } : skill
    );
    setSkills(updatedSkills);

   
  
    // Set text direction to left-to-right
    const skillBox = document.getElementById(`smallBox-${id}`);
    if (skillBox) {
      skillBox.style.direction = 'ltr';
    }
  };
  const handleRemoveSkill = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id));
  };

  const handleAddApplicant = () => {
    setApplicants((prevApplicants) => [
      ...prevApplicants,
      { id: Date.now(), content: "", isSelected: true },
    ]);
  };

  const handleApplicantChange = (event, id) => {
    const updatedApplicants = applicants.map((applicant) =>
      applicant.id === id
        ? { ...applicant, content: event.target.textContent }
        : applicant
    );
    setApplicants(updatedApplicants);
  };
  const handleRemoveApplicant = (id) => {
    setApplicants((prevApplicants) =>
      prevApplicants.filter((applicant) => applicant.id !== id)
    );
  };
 

 
  
  
  useEffect(() => {
    skills.forEach((skill) => {
      const smallBox = document.getElementById(`smallBox-${skill.id}`);
      if (smallBox) {
        smallBox.style.width = `${smallBox}px`;
      }
    });
  }, [skills]);

  return (
    
    <div className="flex items-center justify-center my-12">
      <div className="rounded-lg p-8 w-full max-w-[800px] border-[1.1px] border-solid border-darkgray">
        {/* Bigger box */}
        <b className="text-17xl ml-[22px]">
        Tell us about the role
      </b>
      <div className='text-[20px] mt-[40px] ml-[22px]'>Job Description</div>
        
        {/* Smaller box */}
        <div className="flex flex-col items-center">
          <div className="text-[18px] font-semibold mb-4 text-left "></div>
          <div className="w-[90%] h-[340px] rounded-lg border border-solid border-darkgray p-4">
      <div
        className="w-[80%] h-[80%] p-[10px] text-[16px] border-0 outline-none"
        contentEditable
        ref={textBoxRef}
        
        
      >
        
        
      </div>
      <div className="mt-2">
        <button onClick={handleBoldClick} className="mr-2 bg-white hover:bg-slate-200">
        <img className="w-4 h-4 p-1" alt="trend" src={bold} />
        </button>
        <button onClick={handleItalicClick} className="mr-2 bg-white  hover:bg-slate-200">
        <img className="w-4 h-4 p-1" alt="italic" src={italic} />
        </button>
        <button onClick={handleAlignLeftClick} className="mr-2 bg-white  hover:bg-slate-200">
        <img className="w-6 h-6" alt="left" src={left} />
        </button>
        <button onClick={handleAlignCenterClick} className="mr-2 bg-white  hover:bg-slate-200">
        <img className="w-4 h-4 p-1" alt="center" src={center} />
        </button>
        <button onClick={handleAlignRightClick} className="bg-white  hover:bg-slate-200">
            <img className="w-6 h-6" alt="right" src={right} />
        </button>
      </div>
    </div>

      </div>

      <div className="text-[20px] mt-[30px] mb-1 ml-[22px] ">Skills Required:</div>
      <div className="flex items-center mb-4">
      {/* ... your existing code */}
      
      <div className="flex flex-wrap mb-2 ml-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            id={`smallBox-${skill.id}`}
            className="p-2 m-2 border border-solid border-darkgray bg-slate-50 hover:shadow-md rounded-lg relative"
            style={{ width: "12rem" }}
          >
            <div
              className="w-[100%] h-[100%] border-0 outline-none"
              contentEditable
              onBlur={(event) => handleSkillChange(event, skill.id)}
              dir="ltr"
              suppressContentEditableWarning={true}
            >
              {skill.content}
            </div>
            <button
              className="absolute top-0 right-0 p-1 bg-white rounded-full text-black text-sm"
              onClick={() => handleRemoveSkill(skill.id)}
            >
              &times;
            </button>
          </div>
        ))}
        <div
          className="p-2 m-2   rounded-lg cursor-pointer bg-palegoldenrod text-black font-oxygen font-semibold"
          onClick={handleAddSkill}
        >
          + Add here
        </div>
      </div>
    </div>
    <div className="text-[20px] mt-[40px] ml-[22px]">Who Can Apply</div>
    <div className="flex items-center mb-4 ml-3">
      {/* ... your existing code ... */}
      
      <div className="flex flex-wrap mt-2">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            id={`applicantBox-${applicant.id}`}
            className="p-2 m-2 border border-solid border-darkgray rounded-lg relative hover:shadow-md"
            style={{ width: "12rem" }}
          >
            <div
              className="w-[100%] h-[100%] border-0 outline-none"
              contentEditable
              onBlur={(event) => handleApplicantChange(event, applicant.id)}
              dir="ltr"
              suppressContentEditableWarning={true}
            >
              {applicant.content}
            </div>
            <button
              className="absolute top-0 right-0 p-1 bg-white text-black rounded-full text-sm"
              onClick={() => handleRemoveApplicant(applicant.id)}
            >
                
              &times;
            </button>
          </div>
        ))}
        <div
          className="p-2 m-2 rounded-lg cursor-pointer bg-palegoldenrod text-black font-oxygen font-semibold"
          onClick={handleAddApplicant}
        >
          + Add here
        </div>
      </div>
    </div>

    <div className="text-[20px] mt-[40px] ml-[22px]">Perks</div>
    <div className="flex items-center justify-center my-2">
      {/* ... your existing code ... */}
      
      <textarea
        className="w-[90%] h-[200px] rounded-lg border border-solid border-darkgray p-4"
        value={perks}
        onChange={handlePerksChange}
      />
    </div>

    <button
        className="px-4 py-2 mt-4 mr-2 bg-blue-500 text-white rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {/* Back Button */}
      <button
        className="px-4 py-2 mt-4 bg-gray-500 text-white rounded-lg"
        onClick={handleGoBack}
      >
        Back
      </button>
    

    </div>
    </div>
    
  );
};

export default SecondForm;
