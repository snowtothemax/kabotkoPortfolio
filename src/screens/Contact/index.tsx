import "./Contact.css";
import "../Home/home.css";

import { NONAME } from "dns";
import React from "react";
import {Link} from 'react-router-dom'

import emailIcon from "../../assets/emailIcon.png";
import facebookIcon from "../../assets/facebook.png";
import githubIcon from "../../assets/github-footer.png";
import instaIcon from "../../assets/insta.png";
import linkedinIcon from "../../assets/linkedIn.png";

interface ContactScreenProps {}

interface ContactScreenState {}

export default class ContactScreen extends React.Component<
  ContactScreenProps,
  ContactScreenState
> {
  constructor(props: ContactScreenProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid" style={{height: '100vh'}}>
        <div className="avoidNav">
          <h1 className="page-header">Contact Me</h1>
        </div>
        <div className="contactContainer">
          <div className="innerBody">
            <div className="cardContainer">
              <a
                href="https://www.linkedin.com/in/kabotko/"
                style={{
                  fontSize: 20,
                  fontWeight: 350,
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <img
                  alt="linkedin"
                  src={linkedinIcon}
                  className="linkedInIcon"
                />
                Max Johnson
              </a>
            </div>
            <div className="cardContainer">
              <a
                href="https://github.com/snowtothemax"
                style={{
                  fontSize: 20,
                  fontWeight: 350,
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <img alt="github" src={githubIcon} className="linkedInIcon" />
                snowtothemax
              </a>
            </div>
            <p><Link to="/files/MaxJohnsonResume.pdf" target="_blank" download>Resume</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
