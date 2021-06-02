import React from "react";
import "./home.css";
import proPic from "../../assets/proPic.jpg";

interface HomeScreenState {
  isVisible: boolean;
}

interface HomeScreenProps {}

export default class HomeScreen extends React.Component<
  HomeScreenProps,
  HomeScreenState
> {
  constructor(props: HomeScreenProps) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisible);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleVisible);
}

  toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      this.setState({ isVisible: true });
    } else if (scrolled <= 10) {
      this.setState({ isVisible: false });
    }
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="avoidNav">
          <h1 className="page-header">Max Johnson</h1>
          <div className="descriptionBlock">
            <span className="top-pic-desc">This is me</span>
            <img src={proPic} style={{ width: "30%" }} />
          </div>
          {<div className="changeup" style={{transition: '.7s all', transform: isVisible ? 'translate(0,0)' : 'translate(0,100vh)'}}>
            <div className="description-below">
              <h3>Background</h3>
              <p>
                I am currently a senior at University of Wisconsin - Madison
                majoring in Computer Engineering with a double major in Computer
                Science
              </p>
              <p>
                I have a strong background in full-stack software development
                for a handful of frameworks.
              </p>
              <p>
                Seeing that I am mainly majoring in Computer Engineering, I have
                a plethora of experience in HDL.
              </p>
            </div>
            <div className="description-below">
              <h3 id="aboutme">A Bit About Me</h3>
              <p>
                In 2018, I graduated from Libertyville Highschool with high
                hopes for my incoming years at college.
              </p>
              <p>
                My hobbies right now include playing the guitar, running,
                exercising, traveling, and hanging with friends and family. Of
                course, I spend a lot of my free-time coding as well.
              </p>
              <p>
                I am currently employed at Quad Graphics as a Software
                Engineering Intern working on the transportation team.
              </p>
              <p>
                If you want to know more about me and my experience, click on
                the <a href="/about">About</a> link.
              </p>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}
