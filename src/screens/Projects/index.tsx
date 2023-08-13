import React from "react";
import "../Home/home.css";

interface ProjectScreenProps { }

interface ProjectScreenState {
  forFunVisible: boolean;
}

export default class ProjectScreen extends React.Component<
  ProjectScreenProps,
  ProjectScreenState
> {
  constructor(props: ProjectScreenProps) {
    super(props);

    this.state = {
      forFunVisible: false,
    };
  }

  componentDidMount() {
    this.setState({ forFunVisible: true })
  }

  componentWillUnmount() {
    this.setState({ forFunVisible: false })
  }

  render() {
    const { forFunVisible } = this.state;
    return (
      <div className="container-fluid" style={{ padding: 0, overflow: "hidden" }}>
        <div className="avoidNav">
          <h1 className="page-header">Projects</h1>
          <p className="small-links">
            <a href="/projects/#fun">For Fun</a>{" "}
          </p>
          <h6>more coming soon</h6>
        </div>
        <div className="changeup" style={{ transition: '.7s all', transform: forFunVisible ? 'translate(0)' : 'translate(100vw)' }}>
          <div className="description-below">
            <h2 id="fun">For Fun</h2>
            <h3>Mosaic Marketplace</h3>
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
      </div>
    );
  }
}
