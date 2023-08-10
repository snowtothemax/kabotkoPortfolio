import React from "react";
import "../Home/home.css";
import captainService from "../../assets/CaptainService.png";

interface AboutScreenState {}

interface AboutScreenProps {}

export default class AboutScreen extends React.Component<
  AboutScreenProps,
  AboutScreenState
> {
  constructor(props: AboutScreenProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
        <div className="avoidNav">
          <h1 className="page-header">About Me</h1>
          <p className="small-links"><a href="/about/#work">Work Experience</a> <a href="/about/#education">Education</a></p>
        </div>
        <div className="changeup">
          <div className="description-below">
            <h2 id="work">Work Experience</h2>
            <h3>Captain Service</h3>
          </div>
          <div className="descriptionBlock">
            <p>
              Captain Service is an on-demand service provider for users
              experiencing mechanical, electrical or plumbing problems.{" "}
              <a href="https://www.captainservice.app/">Live Site</a>
            </p>
            <img
              src={captainService}
              alt="captain service"
              className="project_img"
            />
          </div>
          <div className="description-below">
            <p>
              Most of my work for Captain Service was done on the front end of
              the application, which was built in React Native using Typescript.
              The application takes advantage of the mobile duality (deployable
              on Android and iOS) that React Native allows for. Along with the
              use of next-generation features such as:
              <li>Socket.io</li>
              <li>GeoCoding</li>
              <li>Google Places API</li>
            </p>
            <h4>Responsibilities and Features Implemented</h4>
            <li>Secure Login (Registration and Login)</li>
            <li>Customer Ticket Creation</li>
            <li>Driver Ticketing and Acceptance</li>
            <li>Profile Design</li>
            <li>UI Unification</li>
            <p>
              The backend was built using Node. I cooperated with another
              developer who created the schemas and the routes on the backend
              while I made the functional components and API calls on the
              frontend.
            </p>

            <h6>App isn't released yet. If you want a demo, let me know!</h6>
          </div>
        </div>
        <div className="description-below">
          <h3>Quad Graphics</h3>
          <p>
            As a software engineering intern at Quad, I gained a lot of
            experience of what it was like to work in an Agile working
            environment as a full-stack developer. I worked on the transportation team, dealing mainly
            with a large codebase that handled the the company's logistics.
          </p>
          <p>
            Most of my work was done on the .NET Framework, with applications
            using React on the frontend and C# on the backend, and data coming
            from an Oracle database.
          </p>
          <h4>Experience</h4>
          <li>Implementing features to display heavy logistical data.</li>
          <li>Fixing possible security flaws in company applications.</li>
          <li>Creating communication between large applications.</li>
          <li>Writing Oracle procedures to audit database activity.</li>
        </div>
        <div className="changeup">
          <div className="description-below">
            <h2 id="education">Education</h2>
            <h3>Computer Engineering</h3>
            <h4>Focuses:</h4>
            <li>Digital System Design</li>
            <li>Analog Circuit Design</li>
            <li>Microcontroller Programming</li>
            <li>Microprocessor Design</li>
            <li>Digital System Synthesis (Using Standard Cell)</li>
            <li>Computer Architecture</li>
            <p>
              These are just a few focuses from my computer engineering courses.
              My work pinnacled in my digital design and synthesis class. We
              were grouped with a team and designed a standard cell circuit for
              a quad copter in the HDL, Verilog. The largest components
              consisted of a SPI and UART interface with small arithmetic
              controllers that the interfaces communicated between. If you want
              to see this final project or read more about it, click{" "}
              <a href="/projects">here</a>.
            </p>
            <h3>Computer Science</h3>
            <h4>Course Topics:</h4>
            <li>Compiler and Language Design</li>
            <li>Algorithms</li>
            <li>Machine Organization</li>
            <li>Computer Graphics</li>
            <li>Data Structures</li>
            <p>
              This list touches on a few of the larger courses I had to take for
              CS, and are some of my favorites. I've showcased all of my
              projects on my{" "}
              <a href="https://github.com/snowtothemax">Github</a> for these
              classes, so go take a look! Otherwise, I explain a few of them in
              more depth on the <a href="/projects">projects</a> page.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
