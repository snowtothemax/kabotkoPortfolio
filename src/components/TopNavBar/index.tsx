import "./TopNavBar.css";
import React, { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

import mobileMenu from "../../assets/mobile-menu-icon.svg";
import UwLogo from "../../assets/uw-crest-web.svg";
import { SelectorTypes } from "../../models";
import Selector from "./Selectors";

const TopNavigationBar: React.FC = () => {
  const [selected, setSelected] = useState<SelectorTypes | undefined>(undefined);
  const [navSelected, setNavSelected] = useState<boolean>(false);

  useEffect(() => {
    // Set the initial selection based on the current path
    switch (window.location.pathname) {
      case "/":
        setSelected(SelectorTypes.HOME);
        break;
      case "/experience":
        setSelected(SelectorTypes.EXPERIENCE);
        break;
      case "/contact":
        setSelected(SelectorTypes.CONTACT);
        break;
      case "/projects":
        setSelected(SelectorTypes.PROJECTS);
        break;
      case "/gallery":
        setSelected(SelectorTypes.GALLERY);
        break;
    }
  }, []);

  const linkOnClick = (selector: SelectorTypes) => {
    setSelected(selector);
    setNavSelected(false);
    window.scrollTo({top: 0});
  };

  const mobileNavBarOnClick = () => {
    setNavSelected(!navSelected);
  };

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
            onClick={() => linkOnClick(SelectorTypes.HOME)}
          />
          <Selector
            text="Experience"
            selected={selected === SelectorTypes.EXPERIENCE}
            to={"/experience"}
            onClick={() => linkOnClick(SelectorTypes.EXPERIENCE)}
          />
          <Selector
            text="Projects"
            selected={selected === SelectorTypes.PROJECTS}
            to={"/projects"}
            onClick={() => linkOnClick(SelectorTypes.PROJECTS)}
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
            onClick={() => linkOnClick(SelectorTypes.CONTACT)}
          />
        </MediaQuery>
        <MediaQuery maxWidth={786}>
          <div className="mobileNavContainer">
            <div className="mobileNavBar">
              <div
                className="mobileNavBarText"
                onClick={mobileNavBarOnClick}
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
          <div className="dropDownMenu" style={{ height: height, transition: ".7s all" }}>
            <Selector
              text="Home"
              selected={selected === SelectorTypes.HOME}
              to={"/"}
              onClick={() => linkOnClick(SelectorTypes.HOME)}
            />
            <Selector
              text="Experience"
              selected={selected === SelectorTypes.EXPERIENCE}
              to={"/experience"}
              onClick={() => linkOnClick(SelectorTypes.EXPERIENCE)}
            />
            <Selector
              text="Projects"
              selected={selected === SelectorTypes.PROJECTS}
              to={"/projects"}
              onClick={() => linkOnClick(SelectorTypes.PROJECTS)}
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
              onClick={() => linkOnClick(SelectorTypes.CONTACT)}
            />
          </div>
        )}
      </MediaQuery>
    </div>
  );
};

export default TopNavigationBar;
