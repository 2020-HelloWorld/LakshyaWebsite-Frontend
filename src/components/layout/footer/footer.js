import React from 'react';
import fb from '../../../static/logo/fbfooter.svg';
import insta from '../../../static/logo/instafooter.svg';
import google from '../../../static/logo/googlefooter.svg';
import linkedin from '../../../static/logo/linkfooter.svg';
import phone from '../../../static/logo/footerphone.svg';
import mail from '../../../static/logo/footermail.svg';
import map from '../../../static/logo/footermap.svg';


const Footer = () => {
  return (
    <div className="bg-gray-100 w-full text-[14px] text-white font-general-sans">
      <b className="text-[48px] text-cornflowerblue text-center py-8">Lakshya</b>
      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-col md:flex-row justify-between gap-8 py-8 px-4">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-lg">Policies</div>
          <div className="text-xs font-oxygen">
            <button className="bg-gray-100 text-white mb-2">Terms</button>
            <button className="bg-gray-100 text-white mb-2">Privacy</button>
            <button className="bg-gray-100 text-white mb-2">Cookie Settings</button>
            <button className="bg-gray-100 text-white mb-2">Guidelines</button>
            <button className="bg-gray-100 text-white mb-2">Licenses</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg">Company</div>
          <div className="text-xs font-oxygen">
            <button className="bg-gray-100 text-white mb-2 hover:underline">About</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Jobs</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Events</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Internships</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Partnerships</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg">Resources</div>
          <div className="text-xs font-oxygen">
            <button className="bg-gray-100 text-white mb-2 hover:underline">Support</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Safety</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Blog</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Feedback</button>
            <button className="bg-gray-100 text-white mb-2 hover:underline">Developers</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg">About Us</div>
          <div className="text-xs font-oxygen">
            <button className="bg-gray-100 text-white mx-2 hover:underline">Vision</button>
            <button className="bg-gray-100 text-white mx-2 hover:underline">Founder</button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="font-semibold text-lg">Contact Us</div>
          <div className="text-xs font-oxygen">
            <div className="flex flex-row items-center gap-2 mb-2">
              <img className="w-5 h-5" alt="footerphone" src={phone} />
              <div>+91-9867564531</div>
            </div>
            <div className="flex flex-row items-center gap-2 mb-2">
              <img className="w-5 h-5" alt="footermail" src={mail} />
              <div>pesuniversity@gmail.com</div>
            </div>
            <div className="flex flex-row items-center gap-2 mb-2">
              <img className="w-5 h-5" alt="footermap" src={map} />
              <div>Ring Road Campus, Bangalore</div>
            </div>
          </div>
          <div className="font-semibold text-lg mt-4">Social Media</div>
          <div className="flex items-center gap-4">
          <button className="bg-gray-100 p-1 rounded-full">
            <img className="w-5 h-5" alt="Facebook" src={fb} />
          </button>
          <button className="bg-gray-100 p-1 rounded-full">
            <img className="w-5 h-5" alt="LinkedIn" src={linkedin} />
          </button>
          <button className="bg-gray-100 p-1 rounded-full">
            <img className="w-5 h-5" alt="Instagram" src={insta} />
          </button>
          <button className="bg-gray-100 p-1 rounded-full">
            <img className="w-5 h-5" alt="Google" src={google} />
          </button>
        </div>
        </div>
      </div>
      <div className="text-sm font-oxygen text-center pb-8">
        Lakshya: Empowering Futures, Inspiring Excellence © 2023- All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;