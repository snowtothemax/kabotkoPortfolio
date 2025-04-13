import React from "react";
import githubIcon from "../../assets/github-footer.png";
import linkedinIcon from "../../assets/linkedIn.png";
import emailIcon from "../../assets/emailIcon.png";
import StyledLink from "../StyledLink";
import { ResumeLink } from "../../screens/general";

import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <p>questions or comments?</p>
      <p>
        <img
          src={emailIcon}
          alt="Email"
          style={{ width: 30, marginRight: 5 }}
        />
        mkjohnson9@wisc.edu
      </p>
      <div className="footer-div">
        <StyledLink href="https://github.com/snowtothemax" icon={githubIcon} iconAlt="github" />
        <StyledLink href="https://www.linkedin.com/in/kabotko/" icon={linkedinIcon} iconAlt="linkedin" />
      </div>
      <p>
        <ResumeLink />
      </p>
    </div>
  );
};

export default Footer;
