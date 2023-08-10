import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../../assets/github-footer.png";
import linkedinIcon from "../../assets/linkedIn.png";
import emailIcon from "../../assets/emailIcon.png";

import "./footer.css";

interface FooterProps {}

interface FooterState {}

export default class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }

  render() {
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
            <img alt="github" src={githubIcon} className="footerIcon" />
          </a>

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
            <img alt="linkedin" src={linkedinIcon} className="footerIcon" />
          </a>
        </div>
        <p>
          <a href='/files/MaxJohnsonResume.pdf' target="_blank" download>
            Resume
          </a>
        </p>
      </div>
    );
  }
}
