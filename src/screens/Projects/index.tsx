import React, { useState, useEffect } from "react";
import "../Home/home.css";
import PageLayout from "../../components/PageLayout";

const ProjectScreen: React.FC = () => {
  const [forFunVisible, setForFunVisible] = useState(false);

  useEffect(() => {
    setForFunVisible(true);
    return () => setForFunVisible(false);
  }, []);

  return (
    <PageLayout
      title="Projects"
      contentStyle={{ overflow: "hidden" }}
      links={
        <>
          <a href="/projects/#mosaicMarketplace">Mosaic Marketplace</a>{" "}
          <a href="/projects/#fftProcessor">FFT Accelerated Processor</a>{" "}
          <a href="/projects/#thisSite">This Site</a>{" "}
        </>
      }
    >
      <h6>more coming soon</h6>
      <div className="changeup" style={{ transition: '.7s all', transform: forFunVisible ? 'translate(0)' : 'translate(100vw)' }}>
        <div className="description-below">
          <h3 id="mosaicMarketplace">Mosaic Marketplace</h3>
          <p>
            Mosaic Marketplace is a social media app for artists who want to
            buy and sell art! This project was a full-stack build with the
            front-end being React Native and the back-end being a Node server.
          </p>
          <div className="iphone-media">
            <div>
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/mosaicGallery.png" alt="gallery" />
              <p>Gallery view</p>
            </div>
            <div>
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/mosaicCollections.png" alt="collections" />
              <p>Collections view</p>
            </div>
            <div>
              <img src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/mosaicProfile.png" alt="collections" />
              <p>Profile view</p>
            </div>
          </div>
          <h4>Cool Features</h4>
          <li>Ecommerce for art</li>
          <li>Tagging system for posts</li>
          <li>User, tag, and collection searching</li>
          <li>Customizable color scheme</li>
          <p>
            I built this app with my friends Jason Carrington, Robinson Cook,
            and Zachary Easton. Its available on the App Store and Google Play, so go check it
            out!{" "}
            <a href="https://apps.apple.com/us/app/id1489117637">
              Mosaic Marketplace
            </a>
          </p>
        </div>
      </div>
      <div>
        <div className="description-below">
          <h3 id="fftProcessor">1024 Point FFT Accelerated Processor</h3>
          <p>
            For my capstone computer engineering class, my classmates and I designed
            a Fast Fourier Transform (FFT) accelerated processor, fully fledged with
            its own ISA.
          </p>
          <div className="descriptionBlock">
            <iframe
              src="https://portfolio-content-bucket.s3.us-east-2.amazonaws.com/1024_Point_FFT_Accelerated_Processor.pdf"
              width="100%"
              height="500px"
              title="PDF Viewer"
            >
              This browser does not support PDFs. Please download the PDF to view it.
            </iframe>
          </div>
          <h4>Cool Features</h4>
          <li>Custom Designed Accelerator Schematic</li>
          <li>Custom Designed Integrated Processor Schematic</li>
          <li>Implemented in Verilog</li>
          <li>Tested in System Verilog</li>
          <p>
            This processor was designed by Aksel Torgerson, Reid Brostoff and Alec Kheibler.
            You can download the paper above, and check out the github below!
            <br/>
            <a href="https://github.com/akseltorgerson/ECE554-Capstone">
              FFT Accelerated Processor Github
            </a>
          </p>
        </div>
      </div>
      <div className="changeup">
        <div className="description-below">
        <h3 id="thisSite">This Website</h3>
          <p>
            Though it is not much, I put some time into this website.
            I implemented this site in React, and I tried to make it a usable/functional experience!
          </p>
          <h4>Notable Things About This Site</h4>
          <li>Implemented in React</li>
          <li>AWS Site and Content Hosted</li>
          <li>Mobile Friendly</li>
          <p>
            If you want to see the code, click the link below.
            <br/>
            <a href="https://github.com/snowtothemax/kabotkoPortfolio">
              This Site's Github
            </a>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectScreen;
