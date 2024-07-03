"use client"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const SocialFollow = () => {
    return (
        <div  className="social-container">
         <a href="https://www.github.com/medijay">
        <FaGithub  />
         </a>
         <a href="https://www.twitter.com">
        <FaTwitter  />
         </a>
         <a href="https://www.twitter.com">
        <FaLinkedin />
         </a>
        </div>
    )
}

export default SocialFollow