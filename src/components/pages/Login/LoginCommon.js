import React,{useState} from 'react';
import google from '../../../static/logo/google.svg';
import fb from '../../../static/logo/facebook.svg';
import student from '../../../static/design/studentlogin.png';
import company from '../../../static/design/companylogin.png';
import mentor from '../../../static/design/mentorlogin.png';
import axios from 'axios';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { GoogleLogin } from '@react-oauth/google';
const LoginCommon = ({ type }) => {
  
  let imageSrc = '';

  let options = '';

  // Determine the image source and fullNameLabel based on the type prop
  switch (type) {
    case 1:
      imageSrc = student;
      options = 'Company/Mentor';
      break;
    case 2:
      imageSrc = company;
      options = 'Mentor/Candidate';
      break;
    case 3:
      imageSrc = mentor;
      options = 'Candidate/Company';
      break;
    default:
      // Provide default values if the type is not recognized
      imageSrc = student;
      options = 'company/Mentor';
      break;
  }

  const [isLogin,setIsLogin] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit=async(e)=>{
    e.preventDefault();
    try {
        const jsonData={
          email:email,
          password:password,
        }
       
       await axios.post('/auth/login/',jsonData,{
          withCredentials:true,
          headers:{
            "Content-Type":'application/json',
          },
        })
        .then((response)=>{
          const cookies=response.headers["set-cookie"];
          if(cookies)
          {
            cookies.forEach((cookie)=>{
              document.cookie=cookie;
            });
          }

          if (response.status === 200) {
              console.log(document.cookie);
              console.log("successfull");
              console.log(response);
              //setIsLogin(true);
          }

        })
        .catch((error)=>console.log(error))
    } catch (error) {
        console.log('Login failed');
    }
  }
  if(isLogin){
    return <Redirect to="/"/>
  }


  const handleGoogleLogin = async (response) => {
    console.log("Google Login Successful. Sending credentials for verification!");
    await axios.post('/auth/google/',{credential:response.credential},{
      withCredentials:true,
      headers:{
        "Content-Type":'application/json',
      },
    }).then((response)=>{
      if(response.status==200){
        console.log("Login Successful");
      }
    })
  };

  const errorMessage = (error) => {
      console.log("Failed to login to google")
      console.log(error);
  };
        

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-4 font-oxygen">Hello Again</h1>
        <GoogleLogin  onSuccess={handleGoogleLogin} onError={errorMessage} />
        <div className="flex items-center justify-between w-96 mb-2">
          <hr className="w-1/3 bg-gray-500"/>
          <p className="text-sm text-gray-500 px-2">OR</p>
          <hr className="w-1/3 bg-gray-500" />
        </div>
        {/* <div className="flex space-x-4">
          <button className="bg-white text-gray-900 hover:bg-gray-300 border border-gray-300 px-6 py-2 flex items-center justify-center">
            <img src={google} alt="Google" className="w-10 h-9" />
            <span className="ml-2 font-oxygen">Sign in with Google</span>
          </button>
          <button className="bg-blue-500 text-gray-900 hover:bg-blue-700 border border-gray-300 px-6 py-2  flex items-center justify-center">
            <img src={fb} alt="Facebook" className="w-10 h-9" />
            <span className="ml-2 font-oxygen">Sign in with Facebook</span>
          </button>
        </div> */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 w-96"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Must be at least 8 characters"
            className="border border-gray-300 px-4 py-3 w-96"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>
        <p className="text-sm text-blue-500 text-left mb-4">
          Forgot Password?
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xl px-10 py-3 w-96 mb-2" onClick={handleLoginSubmit}>
          Login
        </button>
        <p className="text-sm text-gray-600">
          Login as <span className="text-blue-500">{options}</span>
        </p>
        <p className="text-sm text-gray-600">
          New to Lakshya? <span className="text-blue-500">Register</span>
        </p>
      </div>
      <div className="hidden md:block w-full md:w-1/2 bg-gray-100 flex justify-center items-center rounded-b-full overflow-hidden rotate-90">
        <img
          className="w-[90%] top-[40%] right-[5%] bottom-[20%] left-[55%] transform -rotate-90"
          alt=""
          src={imageSrc}
        />
      </div>
    </div>
  );

};

export default LoginCommon;

