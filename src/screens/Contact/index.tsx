import "./Contact.css";
import "../Home/home.css";
import React from "react";

import githubIcon from "../../assets/github-footer.png";
import linkedinIcon from "../../assets/linkedIn.png";
import { ResumeLink } from "../general";
import StyledLink from "../../components/StyledLink";
import PageLayout from "../../components/PageLayout";

const ContactScreen: React.FC = () => {
  return (
    <PageLayout 
      title="Contact Me"
      contentStyle={{ height: '100vh' }}
    >
      <div className="contactContainer">
        <div className="innerBody">
          <div className="cardContainer">
            <StyledLink 
              href="https://www.linkedin.com/in/kabotko/" 
              icon={linkedinIcon}
              iconAlt="linkedin"
            >
              Max Johnson
            </StyledLink>
          </div>
          <div className="cardContainer">
            <StyledLink 
              href="https://github.com/snowtothemax" 
              icon={githubIcon}
              iconAlt="github"
            >
              snowtothemax
            </StyledLink>
          </div>
          <p><ResumeLink /></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactScreen;
