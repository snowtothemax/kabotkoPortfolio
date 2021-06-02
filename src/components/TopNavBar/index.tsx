import "./TopNavBar.css";

import React from "react";
import MediaQuery from "react-responsive";

import mobileMenu from "../../assets/mobile-menu-icon.svg";
import UwLogo from "../../assets/uw-crest-web.svg";
import { SelectorTypes } from "../../models";
import Selector from "./Selectors";

interface TopNavigationBarProps {}

interface TopNavigationBarState {
  selected?: SelectorTypes;
  navSelected?: boolean;
}

export default class TopNavigationBar extends React.Component<
  TopNavigationBarProps,
  TopNavigationBarState
> {
  constructor(props: TopNavigationBarProps) {
    super(props);

    this.state = {
      selected: undefined,
      navSelected: false,
    };
  }

  componentDidMount() {
    switch (window.location.pathname) {
      case "/":
        this.setState({ selected: SelectorTypes.HOME });
        break;
      case "/about":
        this.setState({ selected: SelectorTypes.ABOUT });
        break;
      case "/contact":
        this.setState({ selected: SelectorTypes.CONTACT });
        break;
      case "/projects":
        this.setState({ selected: SelectorTypes.PROJECTS });
        break;
      case "/gallery":
        this.setState({ selected: SelectorTypes.GALLERY });
    }
  }
  homeOnClick = () => {
    this.setState({ selected: SelectorTypes.HOME });
  };
  aboutOnClick = () => {
    this.setState({ selected: SelectorTypes.ABOUT });
  };
  projectsOnClick = () => {
    this.setState({ selected: SelectorTypes.PROJECTS });
  };
  contactOnClick = () => {
    this.setState({ selected: SelectorTypes.CONTACT });
  };
  galleryOnClick = () => {
    this.setState({ selected: SelectorTypes.GALLERY });
  };
  mobileNavBarOnClick = () => {
    const { navSelected } = this.state;
    this.setState({ navSelected: !navSelected });
  };

  render() {
    const { selected, navSelected } = this.state;
    const angle = navSelected ? "-90deg" : "0deg";
    const height = navSelected ? "auto" : 0;
    return (
      <div className="container-fluid">
        <div className="container-fluid navBar">
          <img src={UwLogo} className="uw-logo" alt="UW Madison" />
          <MediaQuery minWidth={768}>
            <Selector
              text="Home"
              selected={selected === SelectorTypes.HOME}
              to={"/"}
              onClick={this.homeOnClick}
            />
            <Selector
              text="About"
              selected={selected === SelectorTypes.ABOUT}
              to={"/about"}
              onClick={this.aboutOnClick}
            />
            <Selector
              text="Projects"
              selected={selected === SelectorTypes.PROJECTS}
              to={"/projects"}
              onClick={this.projectsOnClick}
            />
            {/* <Selector
              text="Gallery"
              selected={selected === SelectorTypes.GALLERY}
              to={"/gallery"}
              onClick={this.galleryOnClick}
            /> */}
            <Selector
              text="Contact"
              selected={selected === SelectorTypes.CONTACT}
              to={"/contact"}
              onClick={this.contactOnClick}
            />
          </MediaQuery>
          <MediaQuery maxWidth={786}>
            <div className="mobileNavContainer">
              <div className="mobileNavBar">
                <div
                  className="mobileNavBarText"
                  onClick={this.mobileNavBarOnClick}
                >
                  <div
                    style={{
                      display: "grid",
                      transform: `rotate(${angle})`,
                      transition: ".3s all",
                    }}
                  >
                    <img
                      className="mobileMenuIcon"
                      alt="drop-down"
                      src={mobileMenu}
                    />
                  </div>
                </div>
              </div>
            </div>
          </MediaQuery>
        </div>
        <MediaQuery maxWidth={786}>
          {navSelected && (
            <div className="dropDownMenu" style={{ height: height }}>
              <Selector
                text="Home"
                selected={selected === SelectorTypes.HOME}
                to={"/"}
                onClick={this.homeOnClick}
              />
              <Selector
                text="About"
                selected={selected === SelectorTypes.ABOUT}
                to={"/about"}
                onClick={this.aboutOnClick}
              />
              <Selector
                text="Projects"
                selected={selected === SelectorTypes.PROJECTS}
                to={"/projects"}
                onClick={this.projectsOnClick}
              />
              {/* <Selector
                text="Gallery"
                selected={selected === SelectorTypes.GALLERY}
                to={"/gallery"}
                onClick={this.galleryOnClick}
              /> */}
              <Selector
                text="Contact"
                selected={selected === SelectorTypes.CONTACT}
                to={"/contact"}
                onClick={this.contactOnClick}
              />
            </div>
          )}
        </MediaQuery>
      </div>
    );
  }
}
