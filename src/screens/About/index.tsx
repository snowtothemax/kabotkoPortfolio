import React from "react";
import "../Home/home.css";
import PageLayout from "../../components/PageLayout";

const AboutScreen: React.FC = () => {
  return (
    <PageLayout 
      title="Experience"
      links={<><a href="/about/#work">Work Experience</a> <a href="/about/#education">Education</a></>}
    >
      <div className="changeup">
        <div className="description-below">
          <h2>Work Experience</h2>
          <h3>Epic Systems</h3>
        </div>
        <div className="descriptionBlock">
          <p>
            I am currently a software developer at Epic Systems, an Electronic Medical Record (EMR) company.
            I have been working with them since July of 2022.
            To learn more about them, <a href="https://www.epic.com/">click here</a>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/24/Epic_Systems.svg"
            alt="Epic Systems Logo"
            className="project_img"
          />
        </div>
      </div>
      <div>
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
          <li>Implemented features to configure and display truck load data.</li>
          <li>Fixing possible security flaws in company applications.</li>
          <li>Create APIs and background processes to run application jobs that handled bulk actions </li>
          <li></li>
        </div>
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
            <a href="https://github.com/snowtothemax/ECE551FinalProject">here</a>.
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
    </PageLayout>
  );
};

export default AboutScreen;
