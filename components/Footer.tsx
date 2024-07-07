"use client"

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img 
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ahmedadekunle558@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ahmed Adekunle
        </p>

          </div> 

          <div className="place-items-end relative h-32 w-32 ">
        < div className =" justify-evenly flex items-stretch space-x-4 flex-row absolute bottom-0 right-0 h-16 w-16">
         <a href="https://www.github.com/medijay">
        <FaGithub />
         </a>
         <a href="https://x.com/Medihuncho">
        <FaTwitter />
         </a>
         <a href="https://www.linkedin.com/in/ahmed-gbenjo-81404a210/">
        <FaLinkedin/>
         </a>
             </div>
         </div>
          

      
      
            
      

    
    </footer>
  );
};

export default Footer;