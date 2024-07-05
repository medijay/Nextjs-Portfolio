"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"


const SocialFollow = () => {
    return (
        <div  className="social-container">
         <a href="https://www.github.com/medijay"
         className="github-social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
         </a>
         <a href="https://www.twitter.com" 
         className="twitter-social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
         </a>
         <a href="https://www.linkedin.com/in/ahmed-gbenjo-81404a210/"
         className="linkedin-social">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
         </a>
        </div>
    )
}

export default SocialFollow